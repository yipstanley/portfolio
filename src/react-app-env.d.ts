/// <reference types="react-scripts" />

declare module '*.PNG'
declare module '*.pdf'
declare module '*.mp3'
declare module 'react-tex'

declare type Project = {
    name: string,
    tech: string,
    purpose: string,
    img: any,
    date: number,
    timeline: string,
    tools?: string,
    linkTo?: string
}