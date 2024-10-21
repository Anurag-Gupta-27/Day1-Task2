import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login attempted with:', username, password);
        // Implement your login logic here
    };

    const handleGoogleLogin = () => {
        console.log('Google login attempted');
        // Implement Google login logic here
    };

    const handleSignupClick = () => {
        navigate('/signup');
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Card className="w-[400px] mx-auto mt-10">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">Login to Day-One</CardTitle>
                    <p className="text-center text-gray-600">Welcome back! Please Login to continue</p>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full" onClick={handleGoogleLogin}>
                        Continue with Google
                    </Button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">or</span>
                        </div>
                    </div>

                    <form onSubmit={handleLogin}>
                        <div className="space-y-2">
                            <Input 
                                type="text" 
                                placeholder="Username" 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <Input 
                                type="password" 
                                placeholder="Password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <Button className="w-full mt-4 bg-primary" type="submit">Login</Button>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account? 
                        <Button variant="link" className="p-0 h-auto" onClick={handleSignupClick}>Sign up</Button>
                    </p>
                </CardFooter>
            </Card>
            
            <footer className="mt-auto py-4 text-center text-sm text-gray-500">
                <p>&copy; 2024 Day-One. All rights reserved.</p>
                <div className="mt-2">
                    <a href="#" className="text-blue-500 hover:underline mr-4">Privacy Policy</a>
                    <a href="#" className="text-blue-500 hover:underline">Terms of Service</a>
                </div>
            </footer>
        </div>
    );
};

export default Login;
