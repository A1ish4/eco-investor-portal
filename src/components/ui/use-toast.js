import * as React from "react";

const TOAST_LIMIT = process.env.REACT_APP_TOAST_LIMIT || 3;
const TOAST_REMOVE_DELAY = process.env.REACT_APP_TOAST_REMOVE_DELAY || 5000;

let count = 0;
const toastTimeouts = new Map();
const listeners = [];
let memoryState = { toasts: [] };

function genId() {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) return;

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({ type: "REMOVE_TOAST", toastId });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };
    case "DISMISS_TOAST":
      dismissToast(action.toastId);
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toastId || action.toastId === undefined
            ? { ...t, open: false }
            : t
        ),
      };
    case "REMOVE_TOAST":
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
    default:
      return state;
  }
};

function dismissToast(toastId) {
  if (toastId) {
    addToRemoveQueue(toastId);
  } else {
    memoryState.toasts.forEach((toast) => addToRemoveQueue(toast.id));
  }
}

function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => listener(memoryState));
}

export function toast({ ...props }) {
  const id = genId();
  const { onDismiss } = props;

  const dismiss = () => {
    onDismiss && onDismiss();
    dispatch({ type: "DISMISS_TOAST", toastId: id });
  };

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => !open && dismiss(),
    },
  });

  return { id, dismiss, update: (props) => dispatch({ type: "UPDATE_TOAST", toast: { ...props, id } }) };
}

export function useToast() {
  const [state, setState] = React.useState(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => listeners.splice(listeners.indexOf(setState), 1);
  }, []);

  React.useEffect(() => {
    return () => {
      toastTimeouts.forEach((timeout) => clearTimeout(timeout));
      toastTimeouts.clear();
    };
  }, []);

  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId }),
  };
}
