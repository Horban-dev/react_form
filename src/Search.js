import { TextField } from "@mui/material";

const Search = (props) => {
    const { onChange, value } = props;

    return <TextField 
    sx={{mb: '10px'}}
                type='search' 
                value={value} 
                onChange={onChange}
                fullWidth
                id="outlined-basic"
                label="search" 
                variant="outlined" />;
};

export default Search;