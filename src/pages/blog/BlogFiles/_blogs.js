import firstBlog from './firstBlog.md'
import secondBlog from './secondBlog.md'
import CakeIcon from '@mui/icons-material/Cake';
import CodeIcon from '@mui/icons-material/Code';

export const blogs = { 
    '001': {
        name: 'First Blog',
        content: firstBlog,
        icon: <CakeIcon />,
        summary: 'This is my first blog ever.',
        tags: ['blog', 'personal'],
        date: '2022/03/08'
    },
    '002': {
        name: 'Second Blog',
        content: secondBlog, 
        icon: <CodeIcon />,
        summary: 'This is my second blog ever.',
        tags: ['javascript', 'react'],
        date: '2022/03/09'
    }
}
