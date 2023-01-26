
import styled from 'styled-components';

const Box = styled.div`
    height: 300px;
    width: 150px;
    border-radius: 1rem;
    background-color: #000000;
    display: block;
    background-image: url("https://www.parkshopping.com.br/sites/pks/files/cinema/gato-de-botas-2_-o-__ltimo-pedido_1.jpg");
    background-size: cover;
    text-align: center;
`;

const MovieTitle = styled.span`    
    color: white; 
    margin-top: 290px;
`;

export default function Movie(){
    return (
        <div>
            <Box>            
                <MovieTitle>Titulo do filme</MovieTitle>
            </Box>            
        </div>
    );
}