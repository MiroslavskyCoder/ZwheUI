# Avatar & AvatarGroup

Components for displaying user profile images or initials.

## Components

*   **Avatar**: Displays a single avatar image with a fallback to initials.
*   **AvatarGroup**: Displays a stacked collection of avatars, with an indicator for overflow.

## Props

### Avatar
*   `src` (string, optional): The URL of the image to display.
*   `alt` (string, optional): Alternative text for the image.
*   `fallback` (string, required): The initials or text to display if the image fails to load.
*   `size` (number, optional, default: 40): The width and height of the avatar in pixels.

### AvatarGroup
*   `children` (React.ReactNode): A series of `Avatar` components.
*   `max` (number, optional, default: 3): The maximum number of avatars to display before showing an overflow count.

## Usage

```tsx
import { Avatar, AvatarGroup } from './src/components';

// Single Avatar
<Avatar src="path/to/image.jpg" fallback="JD" />

// Avatar Group
<AvatarGroup max={3}>
    <Avatar src="path/to/user1.jpg" fallback="U1" />
    <Avatar src="path/to/user2.jpg" fallback="U2" />
    <Avatar fallback="U3" />
    <Avatar fallback="U4" />
</AvatarGroup>
```
