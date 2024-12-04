import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// SignUp Component
const SignUp = () => {
  // State variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!name || name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters.';
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      newErrors.email = 'Please enter a valid email.';
      isValid = false;
    }

    if (!password || password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setMessage('Account created successfully!');
      setName('');
      setEmail('');
      setPassword('');
    } else {
      setMessage('Please fix the errors.');
    }
  };

  return (
    <Wrapper>
      <Container>
        <LeftSection>
          <Heading>Welcome to Shop.Co!</Heading>
          <Description>Join us and get exclusive offers.</Description>
        </LeftSection>

        <RightSection>
          <FormContainer>
            <FormTitle>Create Your Account</FormTitle>
            <Form onSubmit={handleSubmit}>
              <InputWrapper>
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <Error>{errors.name}</Error>}
              </InputWrapper>

              <InputWrapper>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <Error>{errors.email}</Error>}
              </InputWrapper>

              <InputWrapper>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <Error>{errors.password}</Error>}
              </InputWrapper>

              <SubmitButton type="submit">Sign Up</SubmitButton>
              {message && <SuccessMessage>{message}</SuccessMessage>}
            </Form>
            <SignInLink>
              Already have an account? <Link to="/auth/login">Log in</Link>
            </SignInLink>
          </FormContainer>
        </RightSection>
      </Container>
    </Wrapper>
  );
};

// Styled Components
const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Container = styled.div`
  display: flex;
  border-radius: 15px;
  overflow: hidden;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;
`;

const LeftSection = styled.div`
  width: 45%;
  background-color: #000000;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 30px 20px;
  }
`;

const Heading = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 250px;
  @media (max-width: 768px) {
    font-size: 16px;
    max-width: 100%;
  }
`;

const RightSection = styled.div`
  width: 55%;
  background-color: #0000001A;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 30px 20px;
  }
`;

const FormContainer = styled.div``;

const FormTitle = styled.h2`
  margin-bottom: 30px;
  font-size: 28px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;
  @media (max-width: 768px) {
    padding: 12px;
    font-size: 14px;
  }
`;

const SubmitButton = styled.button`
  padding: 15px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 16px;
  }
`;

const SignInLink = styled.p`
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Error = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

const SuccessMessage = styled.p`
  color: green;
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
`;

export default SignUp;
