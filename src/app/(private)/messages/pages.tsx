'use client';

import { ComposeContainer, Container, Wrapper } from './messages.css';

import { useRef } from 'react';

import { Button, Input } from '@/components/ui';

export default function Messages() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Container>
      <Wrapper>
        {/* info */}

        {/* messages */}

        {/* compose */}
        <ComposeContainer>
          <Input ref={inputRef} />

          <Button>Send</Button>
        </ComposeContainer>
      </Wrapper>
    </Container>
  );
}
