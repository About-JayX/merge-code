import { AnchorHTMLAttributes } from "react";
import "./index.scss";
interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}
export default function Card({ className,...props }: ButtonProps) {
  return (
    <a className={`memes-card text-current ${className}`} {...props}>
      <div className="card">
        <div className="card2">
          <form className="form">{props.children}</form>
        </div>
      </div>
    </a>
  );
}
