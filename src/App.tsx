import './App.css';
import '@emotion/react';
import styled from '@emotion/styled';

function App() {
  return (
    <div>
      <Header>
        <div>
        I'm <Del>not</Del> okay
        </div>
      </Header>
      <Container>
      <Box>
        <TextArea>
          hello~
        </TextArea>
      </Box>
      <Box>
        <TextArea>
          Hello, World!
        </TextArea>
      </Box>
      </Container>
    </div>
  );
}

const Header= styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 3rem;
  background-color: #8364df;
  text-align: left;
  padding: 0.8rem;
  padding-left: 2rem;
  font-size : 2.5rem;
  font-weight: bold;
  color: white;
  
`;

const Del = styled.span`
  font-weight: lighter;
  text-decoration-line: line-through;
  color: rgba(256,256,256,0.2);
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  padding: 2rem;
  margin: 1rem;
`;

const TextArea = styled.textarea`
  width: 20rem;
  height: 15rem;
  font-size: 1.2rem;
  padding: 2rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px #999;
`;

export default App;
