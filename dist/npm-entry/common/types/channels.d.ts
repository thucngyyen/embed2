import type { CustomEventChannel } from "client/lib/ce";
import type { FrameChannel } from "common/lib/fc";
import type { PartialRecord } from "common/types/helpers";
import type { Module } from "common/types/modules";
export declare type FrameChannels = PartialRecord<Module, FrameChannel>;
interface LocalChannel {
    local: CustomEventChannel;
}
export declare type Channels = FrameChannels & LocalChannel;
export {};
