
type CourseStaffProps = {
    name: string
    title: string
    rating: number
}

export default function CourseStaff({name, title, rating}: CourseStaffProps) {
    return (
        <div style={{backgroundColor: "blue"}}>
            <h3>{name}</h3>
            <p>{title}</p>
            <p>{rating}</p>
        </div>
    )
}