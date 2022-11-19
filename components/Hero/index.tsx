import { Button, Modal } from '@mantine/core';
import { useState } from 'react';

export default function Hero() {
  const [opened, setOpened] = useState<boolean>(false);
  return (
    <>
      <Modal
        overlayOpacity={0.3}
        padding={0}
        withCloseButton={false}
        size="xs"
        opened={opened}
        onClose={(): void => {
          throw new Error('Function not implemented.');
        }}
      >
        <div className="dpm">
          <div className="dpm-header">Unfollow Elon Musk?</div>
          <div className="dpm-body">
            This can’t be undone and this user will be removed from your following.
          </div>
          <div className="dpm-footer">
            <Button onClick={() => {}} radius="xl" color="dark">
              Unfollow
            </Button>
            <Button variant="outline" color="gray" radius="xl">
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
      <Button onClick={() => setOpened(true)}>Open</Button>
    </>
  );
}
