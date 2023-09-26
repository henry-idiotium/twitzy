import tw, { styled } from 'twin.macro';

export const Container = tw.div`
  w-full pl-4 py-2
`;

export const Wrapper = tw.div`
  flex gap-4 items-center
`;

export const IconWrapper = tw.div`
  wh-8 [> *]:(wh-full stroke-0)
`;

export const DisplayText = styled.span<{ $active?: boolean }>((props) => [
  props.$active ? tw`text-cyan-700` : '',
  tw`
    font-semibold text-xl
    xl-max:(hidden)
  `,
]);
