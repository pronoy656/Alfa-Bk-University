"use client";

import React, { forwardRef } from "react";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  error?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  inputSize?: "sm" | "md" | "lg";
  variant?: "default" | "filled" | "outline";
  fullWidth?: boolean;
  containerClassName?: string;
  labelClassName?: string;
}

const sizePadding = {
  sm: {
    base: "px-3 py-1.5 text-xs rounded-lg",
    withLeftIcon: "pl-9",
    withRightIcon: "pr-9",
  },
  md: {
    base: "px-3.5 py-2.5 text-sm rounded-xl",
    withLeftIcon: "pl-10",
    withRightIcon: "pr-10",
  },
  lg: {
    base: "px-4 py-3 text-base rounded-xl",
    withLeftIcon: "pl-11",
    withRightIcon: "pr-11",
  },
};

const variantStyles = {
  default:
    "bg-white border border-slate-200/90 text-slate-800 placeholder:text-slate-400 focus:border-[#0B2545] focus:ring-2 focus:ring-[#0B2545]/15 shadow-2xs",
  filled:
    "bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-[#0B2545] focus:ring-2 focus:ring-[#0B2545]/15",
  outline:
    "bg-transparent border border-slate-300 text-slate-800 placeholder:text-slate-400 focus:border-[#0B2545] focus:ring-2 focus:ring-[#0B2545]/15",
};

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label,
    helperText,
    error,
    leftIcon,
    rightIcon,
    inputSize = "md",
    variant = "default",
    fullWidth = true,
    containerClassName = "",
    labelClassName = "",
    className = "",
    disabled,
    id,
    ...props
  },
  ref
) {
  const generatedId = React.useId();
  const inputId = id || generatedId;

  const sizeConfig = sizePadding[inputSize];

  return (
    <div className={`${fullWidth ? "w-full" : "inline-block"} ${containerClassName}`}>
      {label && (
        <label
          htmlFor={inputId}
          className={`block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 select-none ${labelClassName}`}
        >
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        {leftIcon && (
          <div className="absolute left-3.5 flex items-center justify-center pointer-events-none text-slate-400 transition-colors">
            {leftIcon}
          </div>
        )}

        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          className={`w-full outline-hidden transition duration-150 ease-in-out disabled:opacity-60 disabled:bg-slate-100 disabled:cursor-not-allowed ${
            sizeConfig.base
          } ${leftIcon ? sizeConfig.withLeftIcon : ""} ${
            rightIcon ? sizeConfig.withRightIcon : ""
          } ${
            error
              ? "border-rose-400 text-rose-900 bg-rose-50/20 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20"
              : variantStyles[variant]
          } ${className}`}
          {...props}
        />

        {rightIcon && (
          <div className="absolute right-3.5 flex items-center justify-center text-slate-400">
            {rightIcon}
          </div>
        )}
      </div>

      {error ? (
        <p className="mt-1.5 text-xs text-rose-600 font-medium animate-fadeIn">
          {error}
        </p>
      ) : helperText ? (
        <p className="mt-1.5 text-xs text-slate-500 font-normal">
          {helperText}
        </p>
      ) : null}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
export { Input as DashboardInput };
export type DashboardInputProps = InputProps;
