export declare function storeRollout(handle: string, group: "A" | "B", lastProb: number): void;
/** The logic below determines whether or not the chat button is visible if the rollout is not 100%
 * GROUP A - DOES NOT SEE CHAT BUTTON
 * GROUP B - SEE'S CHAT BUTTON
 *
 * First we check if the rollout is either 100% or 0%. In either of these cases we do not need to check the probability score to determine their grouping.
 * - If the rollout is 100% we put the user in group B and they see the button.
 * - If the rollout is 0% we put the user in group A and they do not see the button.
 * - If the rollout is between 0% and 100% we need to check the probability score to determine their grouping and store the result.
 *
 * - If the user has not been put in a group yet we need to put them in a group and store the result.
 * - If the user has already been put in a group and the rollout has not changed we do not need to move them.
 * - If the user has already been put in a group and the rollout has changed we need to check if they should be moved to the other group and store the result.
 */
export declare function checkRollout(rollout: number, handle: string): boolean;
