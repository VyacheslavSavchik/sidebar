import {forwardRef, Ref, SVGProps} from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
<svg width="15px" height="15px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>

    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" >
        <g id="Icon-Set-Filled"  transform="translate(-206.000000, -413.000000)" fill="#000000">
            <path d="M232,430 C232,430.553 231.552,431 231,431 C230.448,431 230,430.553 230,430 L230,422 C230,421.448 230.448,421 231,421 C231.552,421 232,421.448 232,422 L232,430 L232,430 Z M224,433 C224,433.553 223.552,434 223,434 C222.448,434 222,433.553 222,433 L222,427 C222,426.448 222.448,426 223,426 C223.552,426 224,426.448 224,427 L224,433 L224,433 Z M216,434 C216,434.553 215.552,435 215,435 C214.448,435 214,434.553 214,434 L214,424 C214,423.448 214.448,423 215,423 C215.552,423 216,423.448 216,424 L216,434 L216,434 Z M230,413 L222,419 L214,416 L206,421 L206,445 L214,440 L222,443 L230,437 L238,443 L238,419 L230,413 L230,413 Z">

</path>
        </g>
    </g>
</svg>
)
export const TicketsIcon = forwardRef(SvgComponent)