import { Box, InputAdornment, TextField, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import StyledSpan from "../../../components/StyledSpan"
import { BOOKS, CONSTANTS } from "../constants"

const BookSection = () => {
    const [foundBooks, setFoundBooks] = useState(BOOKS)

    const { register, watch } = useForm({
        defaultValues: {
            bookQuery: ''
        }
    })

    const bookQuery = watch('bookQuery')

    useEffect(() => {
        if (bookQuery.trim() === '') {
            setFoundBooks(BOOKS)
            return
        }

        const filteredBooks = BOOKS.filter(book => {
            return (
                book.title.includes(bookQuery) || 
                book.author.includes(bookQuery) || 
                book.tags.some(tag => tag.includes(bookQuery))
            )
        })

        setFoundBooks(filteredBooks)
    // eslint-disable-next-line
    }, [bookQuery])

    return (
        <Box>
            <TextField 
                {...register('bookQuery')} 
                defaultValue='' 
                fullWidth
                size='small'
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <SearchIcon />
                        </InputAdornment>
                    )
                }} 
                helperText={
                    <Box ml={-1} color='text.primary.main'>
                        {CONSTANTS.QUERY_HELPER}
                    </Box>
                }
            />

            <Box mt={2}>
                {foundBooks.map(book => (
                    <Box key={book.title} mb={4}>
                        <Typography component='div'>
                            <StyledSpan>{book.title}</StyledSpan> - by: {book.author} - {book.rating}⭐
                        </Typography>
                        <Typography fontStyle='italic' variant='caption' gutterBottom>
                            Tags: [{' '}
                            {book.tags.map((tag, i) => (
                                i === book.tags.length - 1 ? `${tag}` : `${tag} | `
                            ))}
                            {' '}]
                        </Typography>
                        <Typography>
                            {book.comment}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default BookSection