import { getPosts } from "./get-posts";
import axios from "axios";

jest.mock("axios");

describe("Get posts api test", () => {
    it("Api calls successfully for the first page", async () => {
        const posts = [
            {
                id: 1,
                title: "His mother had always taught him",
                reactions: 2,
                tags: ["history", "american", "crime"],
                body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
                userId: 9,
            },
            {
                id: 2,
                title: "He was an expert but not in a discipline",
                reactions: 2,
                tags: ["french", "fiction", "english"],
                body: "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.",
                userId: 13,
            },
            {
                id: 3,
                title: "Dave watched as the forest burned up on the hill.",
                reactions: 5,
                tags: ["magical", "history", "french"],
                body: "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
                userId: 32,
            },
            {
                id: 4,
                title: "All he wanted was a candy bar.",
                reactions: 1,
                tags: ["mystery", "english", "american"],
                body: "All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request. It might have had something to do with the gun pointed at his face.",
                userId: 12,
            },
            {
                id: 5,
                title: "Hopes and dreams were dashed that day.",
                reactions: 2,
                tags: ["crime", "mystery", "love"],
                body: "Hopes and dreams were dashed that day. It should have been expected, but it still came as a shock. The warning signs had been ignored in favor of the possibility, however remote, that it could actually happen. That possibility had grown from hope to an undeniable belief it must be destiny. That was until it wasn't and the hopes and dreams came crashing down.",
                userId: 41,
            },
            {
                id: 6,
                title: "Dave wasn't exactly sure how he had ended up",
                reactions: 3,
                tags: ["english", "classic", "american"],
                body: "Dave wasn't exactly sure how he had ended up in this predicament. He ran through all the events that had lead to this current situation and it still didn't make sense. He wanted to spend some time to try and make sense of it all, but he had higher priorities at the moment. The first was how to get out of his current situation of being naked in a tree with snow falling all around and no way for him to get down.",
                userId: 47,
            },
            {
                id: 7,
                title: "This is important to remember.",
                reactions: 0,
                tags: ["magical", "crime"],
                body: "This is important to remember. Love isn't like pie. You don't need to divide it among all your friends and loved ones. No matter how much love you give, you can always give more. It doesn't run out, so don't try to hold back giving it as if it may one day run out. Give it freely and as much as you want.",
                userId: 12,
            },
            {
                id: 8,
                title: "One can cook on and with an open fire.",
                reactions: 9,
                tags: ["american", "english"],
                body: "One can cook on and with an open fire. These are some of the ways to cook with fire outside. Cooking meat using a spit is a great way to evenly cook meat. In order to keep meat from burning, it's best to slowly rotate it.",
                userId: 31,
            },
            {
                id: 9,
                title: "There are different types of secrets.",
                reactions: 2,
                tags: ["american", "history", "magical"],
                body: "There are different types of secrets. She had held onto plenty of them during her life, but this one was different. She found herself holding onto the worst type. It was the type of secret that could gnaw away at your insides if you didn't tell someone about it, but it could end up getting you killed if you did.",
                userId: 42,
            },
            {
                id: 10,
                title: "They rushed out the door.",
                reactions: 4,
                tags: ["fiction", "magical", "history"],
                body: "They rushed out the door, grabbing anything and everything they could think of they might need. There was no time to double-check to make sure they weren't leaving something important behind. Everything was thrown into the car and they sped off. Thirty minutes later they were safe and that was when it dawned on them that they had forgotten the most important thing of all.",
                userId: 1,
            },
            {
                id: 11,
                title: "It wasn't quite yet time to panic.",
                reactions: 5,
                tags: ["mystery", "american", "history"],
                body: "It wasn't quite yet time to panic. There was still time to salvage the situation. At least that is what she was telling himself. The reality was that it was time to panic and there wasn't time to salvage the situation, but he continued to delude himself into believing there was.",
                userId: 25,
            },
            {
                id: 12,
                title: "She was aware that things could go wrong.",
                reactions: 7,
                tags: ["love", "english"],
                body: "She was aware that things could go wrong. In fact, she had trained her entire life in anticipation that things would go wrong one day. She had quiet confidence as she started to see that this was the day that all her training would be worthwhile and useful. At this point, she had no idea just how wrong everything would go that day.",
                userId: 26,
            },
        ];

        const mockedAxios = axios as jest.Mocked<any>;
        mockedAxios.get.mockResolvedValueOnce(posts);

        const result = await getPosts(0);
        expect(axios.get).toHaveBeenCalledWith(
            "https://dummyjson.com/posts?limit=12&select=id,title,reactions,tags,body,userId"
        );

        expect(result).toEqual(posts);
    });
    it("Api calls successfully for the 5 page", async () => {
        const posts = [
            {
                id: 61,
                title: "I'm going to hire professional help tomorrow.",
                reactions: 6,
                tags: ["fiction", "classic", "american"],
                body: "I'm going to hire professional help tomorrow. I can't handle this anymore. She fell over the coffee table and now there is blood in her catheter. This is much more than I ever signed up to do.",
                userId: 21,
            },
            {
                id: 62,
                title: "He watched as the young man tried",
                reactions: 6,
                tags: ["magical", "mystery", "love"],
                body: "He watched as the young man tried to impress everyone in the room with his intelligence. There was no doubt that he was smart. The fact that he was more intelligent than anyone else in the room could have been easily deduced, but nobody was really paying any attention due to the fact that it was also obvious that the young man only cared about his intelligence.",
                userId: 4,
            },
            {
                id: 63,
                title: "Many people say that life isn't like a bed of roses.",
                reactions: 4,
                tags: ["magical"],
                body: "Many people say that life isn't like a bed of roses. I beg to differ. I think that life is quite like a bed of roses. Just like life, a bed of roses looks pretty on the outside, but when you're in it, you find that it is nothing but thorns and pain. I myself have been pricked quite badly.",
                userId: 9,
            },
            {
                id: 64,
                title: "There are only three ways to make this work.",
                reactions: 0,
                tags: ["classic", "english"],
                body: "There are only three ways to make this work. The first is to let me take care of everything. The second is for you to take care of everything. The third is to split everything 50 / 50. I think the last option is the most preferable, but I'm certain it'll also mean the end of our marriage.",
                userId: 34,
            },
            {
                id: 65,
                title: "Time is all relative based on age and experience.",
                reactions: 1,
                tags: ["love", "fiction", "classic"],
                body: "As a middle-aged adult, time flies by as you watch your children grow up. And finally, as you get old and you have fewer responsibilities and fewer demands on you, time slows. You appreciate each day and are thankful you are alive. An hour is the same amount of time for everyone yet it can feel so different in how it goes by.",
                userId: 46,
            },
            {
                id: 66,
                title: "Time is all relative based on age and experience.",
                reactions: 7,
                tags: ["mystery", "magical", "crime"],
                body: "When you are a child an hour is a long time to wait but a very short time when that’s all the time you are allowed on your iPad. As a teenager time goes faster the more deadlines you have and the more you procrastinate. As a young adult, you think you have forever to live and don’t appreciate the time you spend with others.",
                userId: 42,
            },
            {
                id: 67,
                title: "Welcome to my world.",
                reactions: 8,
                tags: ["love", "history"],
                body: "You will be greeted by the unexpected here and your mind will be challenged and expanded in ways that you never thought possible. That is if you are able to survive...",
                userId: 33,
            },
            {
                id: 68,
                title: "She sat down with her notebook in her hand",
                reactions: 3,
                tags: ["history", "english", "love"],
                body: "She sat down with her notebook in her hand, her mind wandering to faraway places. She paused and considered all that had happened. It hadn't gone as expected. When the day began she thought it was going to be a bad one, but as she sat recalling the day's events to write them down, she had to admit, it had been a rather marvelous day.",
                userId: 33,
            },
            {
                id: 69,
                title:
                    "The wave roared towards them with speed and violence they had not anticipated.",
                reactions: 6,
                tags: ["american", "fiction", "classic"],
                body: "The wave roared towards them with speed and violence they had not anticipated. They both turned to run but by that time it was too late. The wave crashed into their legs sweeping both of them off of their feet. They now found themselves in a washing machine of saltwater, getting tumbled and not know what was up or down.",
                userId: 42,
            },
            {
                id: 70,
                title: "Sometimes there isn't a good answer.",
                reactions: 6,
                tags: ["english", "history", "crime"],
                body: "Sometimes there isn't a good answer. No matter how you try to rationalize the outcome, it doesn't make sense. And instead of an answer, you are simply left with a question. Why?",
                userId: 38,
            },
            {
                id: 71,
                title: "He knew what he was supposed to do.",
                reactions: 6,
                tags: ["love", "fiction"],
                body: "He knew what he was supposed to do. That had been apparent from the beginning. That was what made the choice so difficult. What he was supposed to do and what he would do were not the same. This would have been fine if he were willing to face the inevitable consequences, but he wasn't.",
                userId: 34,
            },
            {
                id: 72,
                title: "The words hadn't flowed from his fingers",
                reactions: 9,
                tags: ["crime", "history", "classic"],
                body: "The words hadn't flowed from his fingers for the past few weeks. He never imagined he'd find himself with writer's block, but here he sat with a blank screen in front of him.",
                userId: 44,
            },
        ];
        const mockedAxios = axios as jest.Mocked<any>;
        mockedAxios.get.mockResolvedValueOnce(posts);

        const result = await getPosts(5);
        expect(axios.get).toHaveBeenCalledWith(
            "https://dummyjson.com/posts?limit=12&skip=60&select=id,title,reactions,tags,body,userId"
        );

        expect(result).toEqual(posts);
    });
});
