
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

        // Forward to Python Backend
        const backendFormData = new FormData();
        backendFormData.append('file', file);

        const response = await fetch('http://localhost:8000/api/v1/resumes/upload', {
            method: 'POST',
            body: backendFormData,
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('Backend upload failed:', errorData);
            return NextResponse.json(
                { error: errorData.detail || 'Backend upload failed' },
                { status: response.status }
            );
        }

        const data = await response.json();

        return NextResponse.json({
            filename: data.filename,
            message: data.message,
            extracted_data: data.extracted_data
        });
    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json(
            { error: 'Upload failed' },
            { status: 500 }
        );
    }
}
