export interface CoursesTypes {
    id: number | string
    title: string
    description: string
    onDelete: () => void
    onEdit: () => void
}