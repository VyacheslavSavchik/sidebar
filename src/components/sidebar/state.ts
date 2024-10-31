import {MainIcon} from "../../icons/MainIcon.tsx";
import {PaymentsIcon} from "../../icons/PaymentsIcon.tsx";
import {TasksIcon} from "../../icons/TasksIcon.tsx";
import {TicketsIcon} from "../../icons/TicketsIcon.tsx";
import {TrendsIcon} from "../../icons/TrendsIcon.tsx";
import {Dot} from "../../icons/Dot.tsx";

export const items = [
    { svg: MainIcon, path: '/', name: 'Main', subItems: [] },
    { svg: TrendsIcon, path: '/trends', name: 'Trends', subItems: [] },
    { svg: TasksIcon, path: '/tasks', name: 'Tasks',
        subItems: [
            {svg: Dot, path: '/tasks/first', name: 'First task'},
            {svg: Dot, path: '/tasks/second', name: 'Second task'},
            {svg: Dot, path: '/tasks/third', name: 'Third task'},
        ]
    },
    { svg: TicketsIcon, path: '/tickets', name: 'Tickets', subItems: [] },
    { svg: PaymentsIcon, path: '/payments', name: 'Payments',
        subItems:[
            {svg: Dot, path: '/payments/all', name: 'All payments'},
            {svg: Dot, path: '/payments/these', name: 'These payments'},
            {svg: Dot, path: '/payments/those', name: 'Those payments'},
        ]
    },
]