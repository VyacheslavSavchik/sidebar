import {forwardRef, Ref, SVGProps} from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
<svg width="15px" height="15px" viewBox="-3 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Icon-Set-Filled" transform="translate(-156.000000, -101.000000)" fill="#000000">
            <path d="M176,109 C174.896,109 174,108.104 174,107 L174,103 L180,109 L176,109 L176,109 Z M174,101 L174,101.028 C173.872,101.028 160,101 160,101 C157.791,101 156,102.791 156,105 L156,129 C156,131.209 157.791,133 160,133 L178,133 C180.209,133 182,131.209 182,129 L182,111 L182,109 L174,101 L174,101 Z">

</path>
        </g>
    </g>
</svg>
)

export const PaymentsIcon = forwardRef(SvgComponent)