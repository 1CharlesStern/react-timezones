import { Container } from '@mantine/core'
import { DateComparer } from '@/components/DateComparer/DateComparer'

export default function TimeZoneConverterApp () {
    return (
        <>
        <Container size="md">
            <DateComparer />
        </Container>
        </>
    )
}