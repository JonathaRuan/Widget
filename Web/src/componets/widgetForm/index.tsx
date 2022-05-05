import { CloseButton } from "../CloseButton";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import toughtImageUrl from '../../assets/tought.svg';

 export const feedbackTypes = {
    BUG:{
        title: 'Problema',
        image:{
            source: bugImageUrl,
            alt:'Imagen de um inseto',
        },
    },
    IDEA:{
        title: 'Idea',
        image:{
            source: ideaImageUrl,
            alt:'Imagem de uma lampada',
        },
    },
    OTHER:{
        title: 'Outro',
        image:{
            source: toughtImageUrl,
            alt:'Imagem de um balao de pensamento',
        },
    },
};

export type FeedbackType= keyof typeof feedbackTypes;

export function WidgetForm(){
    const [feedbackType, setFeedbackType] = useState <FeedbackType | null> (null)


        function handleRestartFeedback(){
            setFeedbackType(null);
        }


    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg">
            

            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType}/>
            ) : (
                <FeedbackContentStep feedbackType={feedbackType} 
                onFeedbackRestartRequested={handleRestartFeedback}
                
                />
            )}

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-1" href="https://rocketseat.com.br">Rocketseat</a>
                
            </footer>
        </div>
    );
}