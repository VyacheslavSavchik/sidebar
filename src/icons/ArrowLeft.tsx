import { Ref, SVGProps, forwardRef } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
<svg width={20} height={20} viewBox={'-5.5 0 26 26'}  xmlns={"http://www.w3.org/2000/svg"} ref={ref} {...props}>

    <g id="Page-1" stroke="none" strokeWidth="1" fill="currentColor" fillRule="evenodd">
        <g id="Icon-Set-Filled" transform="translate(-423.000000, -1196.000000)" fill="currentColor">
            <path d="M428.115,1209 L437.371,1200.6 C438.202,1199.77 438.202,1198.43 437.371,1197.6 C436.541,1196.76 435.194,1196.76 434.363,1197.6 L423.596,1207.36 C423.146,1207.81 422.948,1208.41 422.985,1209 C422.948,1209.59 423.146,1210.19 423.596,1210.64 L434.363,1220.4 C435.194,1221.24 436.541,1221.24 437.371,1220.4 C438.202,1219.57 438.202,1218.23 437.371,1217.4 L428.115,1209" >

</path>
        </g>
    </g>
</svg>
)

export const ArrowLeft = forwardRef(SvgComponent)
