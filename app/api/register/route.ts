import { Resend } from 'resend';
import welcome from "../../../emails/welcome"
import { NextResponse } from 'next/server';
import { User } from '@/app/schema/UserModel';

type EmailProps = {
    username: string,
    email: string
}

export async function POST(request: Request) {
const resend = new Resend("re_J67CwFXj_Lm5NxKpFnDeaJ9m6WvqgCB29");

    const {username, email} = await request.json();
    console.log(username+"  "+ email);
    try {
        // const res = await resend.emails.send({
        //     from: "onboarding@resend.dev",
        //     to: email,
        //     subject: 'Welcome here',
        //     react: welcome(username),
        //   });
        //   if(res.data){
        //     return NextResponse.json({
        //         success: true,
        //         message: "Email sent to "+email
        //       })
        //   }
        //   return NextResponse.json({
        //     success: false,
        //     message: "Something went wrong"
        //   })

        const newUser = await new User({
            name: username,
            email: email
        })

        newUser.save().then((user)=> console.log("User saved "+user))
        .catch(error => console.log("Error "+error));
        return NextResponse.json({
            status: true
        })
          
    } catch (error) {
        console.log("Error :"+error)
        return NextResponse.json({
            success: false,
            message: "Failed to register the user"
          })
    }
}

export async function GET(){
    console.log("Get request found !");
    return NextResponse.json({
        status: "success",
        message: "Welcome to next.js"
    })
}
