import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Link from "next/link"

// ===[ TERMS & CONDITIONS ]================================
export function TermsConditionsDialogComponent() {

    return (
        <DialogContent className="sm:max-w-[300px] pt-10 pb-5">
            <DialogHeader>
                <DialogTitle>Minify - Terms and Conditions</DialogTitle>
                <DialogDescription>
                    Last edited: 3 Mar, 2024
                </DialogDescription>
            </DialogHeader>
            <div className="py-4 text-sm overflow-y-scroll flex flex-col justify-start max-h-[calc(100vh-300px)] scrollbar-hide">
                <h2 className="font-bold text-lg mt-8">1. Acceptance of Terms:</h2>
                <p className="text-justify text-[#ffffff95] hover:text-[#fff]">By using the Service, you agree to comply with these Terms. These Terms may be updated by us from time to time without notice. Your continued use of the Service after any changes constitutes your acceptance of the revised Terms.</p>

                <h2 className="font-bold text-lg mt-8">2. Description of Service:</h2>
                <p className="text-justify text-[#ffffff95] hover:text-[#fff]">Minify provides a URL shortening service that allows users to create shortened versions of long URLs. These shortened URLs redirect users to the original long URLs.</p>

                <h2 className="font-bold text-lg mt-8">3. User Conduct:</h2>
                <p className="text-justify text-[#ffffff95] hover:text-[#fff]">You agree to use the Service only for lawful purposes and in a manner consistent with these Terms and any applicable laws and regulations. You must not use the Service to:</p>
                <br />
                <span className="text-[#ffffff95] hover:text-[#fff]">• Violate any laws or regulations.</span>
                <span className="text-[#ffffff95] hover:text-[#fff]">• Infringe upon the rights of others.</span>
                <span className="text-[#ffffff95] hover:text-[#fff]">• Transmit any harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable content.</span>
                <span className="text-[#ffffff95] hover:text-[#fff]">• Interfere with or disrupt the integrity or performance of the Service or its underlying infrastructure.</span>
                <span className="text-[#ffffff95] hover:text-[#fff]">• Attempt to gain unauthorized access to any account, system, or network connected to the Service.</span>

                <h2 className="font-bold text-lg mt-8">4. Intellectual Property:</h2>
                <p className="text-justify text-[#ffffff95] hover:text-[#fff]">All content and materials available through the Service, including but not limited to text, graphics, logos, button icons, images, audio clips, and software, are the property of Minify or its licensors and are protected by intellectual property laws. You may not copy, reproduce, modify, distribute, or display any portion of the Service without prior written consent from Minify.</p>

                <h2 className="font-bold text-lg mt-8">5. Privacy:</h2>
                <p className="text-justify text-[#ffffff95] hover:text-[#fff]">Your privacy is important to us. Please refer to our Privacy Policy for information on how we collect, use, and disclose your personal information.</p>

                <h2 className="font-bold text-lg mt-8">6. Limitation of Liability:</h2>
                <p className="text-justify text-[#ffffff95] hover:text-[#fff]">Minify shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Service, even if we have been advised of the possibility of such damages. In no event shall our total liability to you for all damages exceed the amount paid by you, if any, for accessing or using the Service.</p>

                <h2 className="font-bold text-lg mt-8">7. Indemnification:</h2>
                <p className="text-justify text-[#ffffff95] hover:text-[#fff]">You agree to indemnify, defend, and hold harmless Minify and its affiliates, officers, directors, employees, agents, licensors, and suppliers from and against any and all losses, liabilities, expenses, damages, and costs, including reasonable attorneys&apos; fees, arising out of or related to your violation of these Terms or any applicable laws or regulations.</p>

                <h2 className="font-bold text-lg mt-8">8. Termination:</h2>
                <p className="text-justify text-[#ffffff95] hover:text-[#fff]">We may terminate or suspend your access to the Service at any time, with or without cause, and without prior notice or liability. Upon termination, your right to use the Service will immediately cease.</p>

                <h2 className="font-bold text-lg mt-8">9. Governing Law:</h2>
                <p className="text-justify text-[#ffffff95] hover:text-[#fff]">These Terms shall be governed by and construed in accordance with the laws of <Link className="text-blue-500 underline" href="https://opensource.org/license/mit">MIT License</Link>, without regard to its conflict of law provisions.</p>

                <h2 className="font-bold text-lg mt-8">10. Contact Us:</h2>
                <p className="text-justify text-[#ffffff95] hover:text-[#fff]">If you have any questions about these Terms, kindly <Link className="text-blue-500 underline" href="mailto:dev@kushalkumarsaha.com">contact us here</Link>.</p>
            </div>
            <DialogFooter className="sm:justify-center">
                <span className="flex gap-3 mt-2 text-[20px] items-baseline justify-center">Data</span>
            </DialogFooter>
        </DialogContent>
    )
}