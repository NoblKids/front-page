"use client";

import { DOMAttributes, ElementType, ReactNode, RefObject, useRef } from "react";
import { AriaButtonProps, ButtonAria, useButton } from "@react-aria/button";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

// children?: ReactNode;
//   className?: string;
//   href?: string;
//   onPress?: () => void;

interface IProps extends AriaButtonProps {
  href? : string
  className? : string
  buttonRef? : React.MutableRefObject <null>

}

function Button({href, className, ...props} : IProps) {
  // let ref = props.ref == undefined ? useRef(null) : props.ref;
  let ref = useRef(null)

  ref = props.buttonRef || ref

  // ElementType ???
  let type : ElementType = typeof href === "undefined" ? 'button' : 'a'
  let { buttonProps } = useButton(
    {
      ...props,
      elementType: type,
    },
    ref
  );
  
  if (typeof href === "undefined") {
    
    return (
      <button
        className={twMerge('text-lg font-medium text-black rounded-lg hover:bg-[#65B6D8] hover:text-white focus:outline-none transition active:translate-y-0.5', className)}
        {...buttonProps}
        ref={ref}
      >
        {props.children}
      </button>
    );
  } else {
    return (
      <Link href={href} passHref legacyBehavior>
        <a
          className={twMerge('text-lg font-medium text-black rounded-lg hover:bg-[#65B6D8] hover:text-white focus:outline-none transition flex items-center justify-center active:translate-y-0.5', className)}
          {...buttonProps}
          ref={ref}
        >
          {props.children}
        </a>
      </Link>
    );
  }
}

export default Button;
