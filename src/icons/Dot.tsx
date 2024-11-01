import { Ref, SVGProps, forwardRef } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
<svg width="10px" height="10px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" ref={ref} {...props}>
    <path fill="#000000" d="M8 3a5 5 0 100 10A5 5 0 008 3z"/>
</svg>
)

export const Dot = forwardRef(SvgComponent)
