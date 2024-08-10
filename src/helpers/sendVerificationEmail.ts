import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verificationEamil";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string

): Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Verification Code @ Paste Bin',
            react: VerificationEmail({
                username,
                otp: verifyCode
            })
        });
        return {
            
            success: true,
            message: "sending Email"
        };
    } catch (emailError) {
        console.error("Error sending Email", emailError);
        return {
            success: false,
            message: "Error sending Email"
        };
    }
}