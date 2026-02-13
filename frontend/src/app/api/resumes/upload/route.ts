
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json(
                { error: 'No file uploaded' },
                { status: 400 }
            );
        }

        // Mock processing - wait 1 second
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json({
            filename: file.name,
            message: 'File uploaded successfully (Mock)',
            extracted_data: {
                name: 'John Doe',
                email: 'john@example.com',
                skills: ['Python', 'JavaScript', 'React']
            }
        });
    } catch (error) {
        return NextResponse.json(
            { error: 'Upload failed' },
            { status: 500 }
        );
    }
}
