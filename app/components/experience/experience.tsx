import { CareerTimeline, EducationTimeline } from "./timeline"

export const Experience = () => {
    return (
        <div className="mx-auto max-w-7xl space-y-20 lg:space-y-0 lg:flex" id="experience">
            <CareerTimeline></CareerTimeline>
            <EducationTimeline></EducationTimeline>
        </div>
    )
}