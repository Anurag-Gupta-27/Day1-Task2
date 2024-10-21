import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Signup: React.FC = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/');
    };  

    return (
        <Card className="w-[400px] mx-auto mt-10">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Sign up for Day-One</CardTitle>
                <p className="text-center text-gray-600">Create your account to get started</p>
            </CardHeader>
            <CardContent className="space-y-4">
                <Button variant="outline" className="w-full">
                    Sign up with Google
                </Button>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">or</span>
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between">
                        <label htmlFor="username" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Username</label>
                    </div>
                    <Input type="text" id="username" placeholder="Enter your username" />
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between">
                        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email address</label>
                    </div>
                    <Input type="email" id="email" placeholder="Enter your email" />
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between">
                        <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Password</label>
                    </div>
                    <Input type="password" id="password" placeholder="Enter your password" />
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between">
                        <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Phone number (optional)</label>
                    </div>
                    <Input type="tel" id="phone" placeholder="Enter your phone number" />
                </div>

                <Button className="w-full bg-primary">Sign up</Button>
            </CardContent>
            <CardFooter className="flex flex-col items-center space-y-2">
                <p className="text-sm text-gray-600">
                    Already have an account? <Button variant="link" className="p-0 h-auto" onClick={handleLoginClick}>Log in</Button>
                </p>
                <p className="text-xs text-gray-500">Secured by clerk</p>
                <p className="text-xs text-orange-500">Development mode</p>
            </CardFooter>
        </Card>
    );
};

export default Signup;
