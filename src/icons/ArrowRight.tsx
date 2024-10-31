import {forwardRef, Ref, SVGProps} from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (

<svg width={"20px"} height={"20px"} viewBox={"-5.5 0 26 26"} xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    
    <title>chevron-right</title>
    <desc>Created with Sketch Beta.</desc>
    <defs>

</defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Icon-Set-Filled"  transform="translate(-474.000000, -1196.000000)" fill="#000000">
            <path d="M488.404,1207.36 L477.637,1197.6 C476.806,1196.76 475.459,1196.76 474.629,1197.6 C473.798,1198.43 473.798,1199.77 474.629,1200.6 L483.885,1209 L474.629,1217.4 C473.798,1218.23 473.798,1219.57 474.629,1220.4 C475.459,1221.24 476.806,1221.24 477.637,1220.4 L488.404,1210.64 C488.854,1210.19 489.052,1209.59 489.015,1209 C489.052,1208.41 488.854,1207.81 488.404,1207.36">

</path>
        </g>
    </g>
</svg>
)

export const ArrowRight = forwardRef(SvgComponent)