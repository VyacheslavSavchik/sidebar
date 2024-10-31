import {forwardRef, Ref, SVGProps} from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
<svg width="15px" height="15px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>

    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" >
        <g id="Icon-Set-Filled" transform="translate(-310.000000, -101.000000)" fill="#000000">
            <path d="M334,111 L318,111 C317.447,111 317,110.553 317,110 C317,109.448 317.447,109 318,109 L334,109 C334.553,109 335,109.448 335,110 C335,110.553 334.553,111 334,111 L334,111 Z M334,117 L318,117 C317.447,117 317,116.553 317,116 C317,115.448 317.447,115 318,115 L334,115 C334.553,115 335,115.448 335,116 C335,116.553 334.553,117 334,117 L334,117 Z M334,123 L318,123 C317.447,123 317,122.553 317,122 C317,121.448 317.447,121 318,121 L334,121 C334.553,121 335,121.448 335,122 C335,122.553 334.553,123 334,123 L334,123 Z M338,101 L314,101 C311.806,101 310,102.969 310,105.165 L310,129.023 C310,131.22 311.779,133 313.974,133 L337.817,133 C340.012,133 342,131.196 342,129 L342,105 C342,102.804 340.194,101 338,101 L338,101 Z">

</path>
        </g>
    </g>
</svg>
)

export const TasksIcon = forwardRef(SvgComponent)