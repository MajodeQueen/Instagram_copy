import Layout from '@/components/Layout';
import SettingsLayout from '@/components/moreComponents/settingsLayout';
import Link from 'next/link';
import React from 'react';
import { BsChat, BsHeart } from 'react-icons/bs';
import { GrEmoji } from 'react-icons/gr';
import { MdOutlineMoreHoriz } from 'react-icons/md';
export default function Messages() {
  return (
    <SettingsLayout>
      <div>Messages</div>
    </SettingsLayout>
  );
}
