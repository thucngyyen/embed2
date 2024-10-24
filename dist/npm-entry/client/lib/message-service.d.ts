import { FrameChannel } from "common/lib/fc";
import type { Channels, FrameChannels } from "common/types/channels";
import type { Module } from "common/types/modules";
import { CustomEventChannel } from "./ce";
export declare class MessageService {
    channels: Channels;
    registerFrameChannel(name: Module, targetWindow: Window, targetOrigin?: string): FrameChannel;
    unregisterChannel(name: keyof FrameChannels): void;
    getChannel<N extends keyof Channels>(name: N): Channels[N];
    getAllChannels(): (FrameChannel | CustomEventChannel)[];
}
