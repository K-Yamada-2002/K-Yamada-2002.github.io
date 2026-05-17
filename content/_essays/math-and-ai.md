---
title: 数学とAIの未来
title_en: On the future of mathematics with AI
description: 2024年6月における数学とAIに関する予測記事
summary: 数学専攻のシンギュラリタリアンの視点から、数学とAIの未来について考察した記事
summary_en: The English version of this article is not available yet.
date: 2024-06-30
translation_key: math-and-ai
lang: ja
lang_url: /en/essays/math-and-ai/
site_name: 山田航輝
copyright_name: 山田航輝
---

皆さんこんにちは。エワルドといいます。普段は数学専攻の大学生として数学を勉強しているのですが、周りの数学者や数学専攻の学生の発言を聞いているうちに、**AI が数学研究に与える影響があまりに過小評価されている**のではないかと感じ、このような記事を書いてみることにしました。

従って、本記事は数学をやっている人間の平均的な意見では全くないと思いますが、シンギュラリタリアンの数学徒がどんなことを考えているのか、参考になれば幸いです。

## 概要

今後数十年以内、おそらくは**2020年代のうちに、生身の人間による数学は終わりを迎えるだろう。**これは一見悲しむべきことに見えるかもしれないが、実は数学の世界をを探求したいと願うすべての人にとっての福音である。人類は AI を用いて、そして **AI と融合することによって**、これまで以上の厳密性を実現すると同時に数学的直観を拡張し、未だ手つかずの領域を開拓できるようになる。**数学の探究は文字通り無限**であり、我々は AI と共に、その広大な世界をこれまで以上に謳歌できるようになるだろう。

## 現状の過小評価と可能性

OpenAI の研究者らが LLM の労働市場への影響を分析した論文 [1][2] において、数学者が影響を受けやすい職業の上位に挙げられたのは記憶に新しい。しかしながら、私が観測している日本の数学コミュニティや SNS 上ではこの結果を疑問を感じている人が多く、さらには嘲笑する風潮さえ散見される。

彼らがこのような分析に反対する理由は主に「数学には厳密な推論能力が必要なのに、LLM はそれが苦手である」ということに集約される。実際、GPT-4o をはじめとする現状の LLM に数学の問題を解かせた際、論理が支離滅裂になることが多いのは事実である。

だが、現状の、しかも数学に特化している訳ではない AI の性能から限界を見ようとするのは短絡的である。例えば、難しい数学の問題に対して、**紙とペンを使わせてもらえず、ノンストップで即座に解答させられる状況**を想像してみてほしい。安易に LLM の動作を擬人化するのは慎むべきだが、今の LLM が行っているのはそのようなタスクに近いと考えられる。

では、そのような欠点を改善できる目処はあるのだろうか？　現在、AGI の実現に向けていわゆるシステム2思考、つまり意識的で論理的な思考の重要性が認識され、その実現に向けて研究が進められているが [3] 、こと数学においては明らかに Coq や Lean などの**定理証明支援系との連携が有望**であろう。

これまでの研究だけでも、例えば GPT-f [4] は Metamath ライブラリに受け入れられた短い新証明を発見しているし、記号推論エンジンと言語モデルとが組み合わされた AlphaGeometry [5] は、数学オリンピックの幾何学問題において金メダリストに匹敵するレベルの成績を記録している。

LLM の登場以降、ディープラーニングを定理証明に活用する研究はめざましく成長しており [6] 、数学のタスクにおいて**LLMのハルシネーションを解決、あるいは問題にならなくすることは十分可能**であると考えられる。そうなった場合、少なくとも数学者の仕事に重大な影響を与えうることは明らかである。

## Xデーはいつか？

レイ・カーツワイルが1999年の著書 [7] において、2029年までに人間レベルの知能を持った機械が誕生すると予想したとき、彼の主張に賛同する AI 研究者はほとんどいなかった [8]。しかしながら、25年経った現在、多くの AI 研究者や実業家が、歩調を合わせたかのように2020年代後半に AGI が実現することを予測、あるいは少なくとも AGI が実現しても驚かないと語っている。

そのような発言をしている人物として、例えば比較的積極的に未来予測を行うことの多い OpenAI の関係者であれば、ジェームズ・ベトカー（2027〜2029年）[3] やレオポルド・アッシェンブレナー（2027年）[9] 、ジョン・シュルマン（2026〜2027年）[10]、ダニエル・ココタジロ（2026年）[11] 、ザック・カス（2027年）[12] 、そしてサム・アルトマン（2028年〜） [13] などが挙げられる。

さらに、 OpenAI の関係者以外でもデミス・ハサビス（〜2034年）[14]、ジェンスン・フアン（〜2028年） [15] 、ダリオ・アモデイ（2025〜2026年） [16] 、イーロン・マスク（〜2026年）[17] など錚々たる面々が挙げられ、AGI の定義は人によって少し異なるが、**多くのトップ AI 研究者や経営者が2020年代後半の AGI 実現を予測している**ことが分かる。

もちろん未来を確実に予測することはできない。しかし、専門家を含むこれほど多数の人間が予測しているのであれば、あらゆる知的タスクを人間と同等以上に行うことのできる **AGI が数年の内に誕生する可能性を真剣に捉えるべき**である。

では数学に限った場合はどうなるだろうか。現代数学は非常に高度な知的タスクであるから、トップ数学者を凌駕する AI の登場は AGI の実現と同時期、あるいはそれより少し遅れるのではないかと思うかもしれない。しかしながら、そのような可能性は低く、むしろ **AGI の誕生の数年前に数学者越えの AI は実現可能**と考えられる。

例えば、モンテカルロ木探索とLLMを組み合わせることにより、 Llama8B によって GPT-4や Claude 、Gemini などに匹敵する数学的推論能力を達成したという報告がある [18]。Llama8B のパラメータ数はこれらフロンティアモデルの100分の1程度であり、数学的推論に特化した場合、 **AGI の1%から10%程度の計算資源で同程度の数学的能力を獲得できる可能性がある**と考えられる**。**

レオポルド・アッシェンブレナーは2027年までの AGI の登場を極めて現実的だとしているが、同時に2027年末までに現状の100倍から1000倍程度の計算能力が実現するだろうと述べている [9] 。つまり、計算資源だけ見れば **AGI に必要なのは現在の100倍から1000倍程度**と推測されている。これらをまとめると、**数学者を凌駕するAIに必要な計算能力は2024年現在、すでに達成されている可能性すら存在する**。

もちろん、アッシェンブレナーの予測はモデルのアーキテクチャ改善なども加味した上での推定であるから、2024年中や2025年の前半に数学者を凌駕する AI が誕生する可能性は低いと考えられるが、**その可能性を否定することはできない**。個人的には、**総合的にみて2026年頃**とするのが妥当と考えている。

## 対立から融合へ

2〜3年以内という非常に近い未来に人間のトップ数学者を超える AI が誕生する可能性があるなか、数学者や純粋数学を専攻する学生はどのように行動するべきだろうか？

まず、人間の数学者に出来て AI に出来ないことを探し続けるのは、AI 研究にとって重要ではあるが、**数学者にとってはあまり有意義なことではない**。

例えば、将棋ソフトが人間を超え始めた頃は棋士の指すハメ手に対応できないなどの問題があったが、現在ではそのような手段を使っても人間が勝利することはまず不可能である。数学 AI に関しても同様で、およそ**人間に可能なことは AI にも可能**であり、欠点はすぐに解決されると考えたほうがよい。

それでは、「数学 AI は確かに人間の数学者の能力をあらゆる面で上回っている。ミレニアム問題をはじめとした難問について形式的に検証された証明を出力することができるし、新しい予想を考えることも、新しい理論を作り出すこともできる。しかしそれらを人間が理解することは難しいから、数学 AI の成果を解釈するために、依然として人間の数学者の役割は残る」というような可能性は存在しないだろうか？

一見もっともらしく聞こえるが、その可能性は残念ながら低いと考えられる。なぜなら、**数学者を超える AI が登場したすぐ後には、あらゆる知的タスクをトップレベルの人間と同等以上に行える AGI が誕生する**と推測されるからだ。それら AGI は数学 AI の成果を解釈したり解説したりすることも、人間以上に上手くできるだろう。

また、スポーツや将棋のように「生身の人間が行う」という点に意味を見いだすことも難しい。確かに数学者には個性的な人間が多く、タレント的人気を博することもあるが、彼らの数学的実力が評価されて人気になっているケースは殆ど皆無といっても良い。

それでは、数学者や数学専攻の学生はどうするべきなのだろうか？　私は、**数学を愛する人間は機械と融合するべきだ**と考える。もちろん、機械を人間の脳に接続し、人間の知能を拡張するというのは大変な難事業である。従って、それが可能になるのはおそらく数学者を超える AI や AGI が登場した後のことであり、いくらか待つ必要があるが、**それに関連した研究を支援することはできる。**

このような技術は、AGI が自己改良を繰り返し誕生する超知能によって完成される可能性が高い。従って、超知能のアライメントやガバナンス体制の問題が重要になってくるが、それらの研究は未だ発展途上にあり、研究者の数も不足している。そのため、たとえ個人であっても、寄付などでそのような団体を支援したり、あるいは自身の数学の知識を活かして貢献したりすることで、良い影響を与えることができるかもしれない。

カーツワイルが2024年に出版した新著の副題 [19] は、奇しくも "When We Merge with AI" 、つまり「**我々が AI と融合するとき**」であった。AI やシンギュラリティに関する議論では「機械が人間の能力を超える」ことばかりフォーカスされ、機械 v.s. 人間 という見方にとらわれがちだが、**そのような対立を超えて、人間が生物学的限界を超える地平を見るべき**であろう。

## 数学の無限性

将棋や囲碁など、運の要素の絡まないボードゲームには理論上「完全解」が存在する。2024年現在でも、すでにチェッカー [20] やオセロ [21] は双方が最善手を指し続ければ引き分けになるという報告がなされている。数学という営みも、同じように AI によって「解決される」ことはないのだろうか？

数学を愛するものにとって幸いなことに、**そのようなことはありえない**。まず、数学において考えられる問題は無限に存在する。そもそも自然数からして無限に存在するのだ。

そしてただ無限に存在するだけではない。例えば「10 ÷ 99 の小数点以下○○番目の数字は1であるか？」という種類の問いは自然数の分だけ、つまり無限に存在するが、これには「○○に入るのが奇数なら YES 、偶数なら NO」というシンプルな答えが存在してしまう。このように、ただ無限に問いが存在するだけではつまらないものになる可能性があるが、**数学はそのようなものではないことが既に証明されている。**

例えば、有名なゲーデルの不完全性定理の応用として「自然数上の真偽決定不可能性定理」というものが存在する。この定理は、「任意の与えられた閉論理式が**自然数上の通常の意味で真であるか偽であるかを判定するアルゴリズムは存在しない**」ことを主張するものである [22] 。

つまり、自然数論に限っても「数学の問題全体」は先ほど例に出した「10 ÷ 99 の小数点以下○○番目の数字は1であるか？」という種類の問題全体（これには YES / NO を決定できるアルゴリズムが存在した）のようにつまらないものではない、ということを意味している。すなわち、たとえ数学者を超える AI であっても、**「数学を完全に解決する」ことは不可能**である。

従って、数学の探求はトップ数学者を上回る数学 AI の誕生後、さらに言えばシンギュラリティに到達したあとも**無限に続けられるゲーム**のようなものである。そして人類は AI と融合することで、その無限の世界を**人間の限界にとらわれることなく**心の赴くままに探求することができる。

例えば、一万桁の整数を二桁の整数のように扱うことが出来たら、整数論はどう変わるだろう？　数学者は二次元や三次元だけでなく一般のn次元、そして無限次元の対象まで考えるが、そのような高次元の対象を、手に取るように扱えたらどうなるだろう？　おそらく、そこには今の我々が想像できないような世界が広がっている。

これまで人類が探求してきた数学の世界は広大である。もはや人類史に残るレベルの大天才でも、すべての分野を知ることは不可能になった。しかしその広大な世界でさえ、無限に比べれば砂金の一粒のように見えるだろう。

生身の人間による数学は終わりを迎え、機械と融合した人間によって数学の新しい時代が始まる。そのとき、**数学はまだ始まったばかりなのだ**。

## おわりに

話の流れの都合上、本稿で十分に触れられなかった重要な話題もいくつかある。例えば、私の意見とは大分異なるが、テレンス・タオの AI についての見解 [23] は、現代のトップ数学者がどのように現状を捉えているのかが分かって面白い。

さらに、超知能を AI との融合の鍵として紹介しているのに、本文中で超知能を巡る議論について詳しく触れることができなかった。この分野については、日本語で読める無料の網羅的な文献として [24] が推薦できる。超知能の恩恵はとてつもなく大きいが、そのリスクも大きい。超知能誕生後の社会にもっとも影響を与えうるのが今であり、数学をバックグラウンドにもつ人間もこぞって議論に参加し、この分野の研究がさらに進められることが期待される。

また、本稿の執筆のため様々な情報源を活用したが、とくに[シンギュラリティ・サーバー](https://discord.com/invite/Q8r4w48dvH)（シンギュラリティについて語りあう Discord サーバー）上の情報と、その参加者がX（Twitter）などで発信している情報は、AI 関連の話題を調べるのにとても役立った。元のソースにあたって引用したためそれらを直接引用することはしなかったが、大変感謝している。

最後になるが、本稿で展開した予測は受け入れづらいものかもしれない。シンギュラリタリアンとしては割と平均的なものだと思っているが、そうではない人、とくに数学に関わる人にとっては受け入れづらいと思う。だから、必ずしも私の予測をそのまま信じて貰う必要はない。その代わり、たとえ**機械が人間の数学力を凌駕しても、それは悲しむべきことではなく、むしろ喜ぶべきことである**、ということが伝わっていれば幸いである。

## 参考文献

1. T. Eloundou, S. Manning, P. Mishkin, and D. Rock, GPTs are GPTs: An Early Look at the Labor Market Impact Potential of Large Language Models. 2023. [Online]. Available: [https://arxiv.org/abs/2303.10130](https://arxiv.org/abs/2303.10130)
    
2. T. Eloundou, S. Manning, P. Mishkin, and Daniel Rock, “GPTs are GPTs: Labor market impact potential of LLMs,” Science, vol. 384, no. 6702, pp. 1306–1308, 2024, doi: 10.1126/science.adj0998.
    
3. J. Betker, "General Intelligence (2024)," Non_Interactive – Software & ML, June 3, 2024. [Online]. Available: [https://nonint.com/2024/06/03/general-intelligence-2024/](https://nonint.com/2024/06/03/general-intelligence-2024/) . [Accessed: Jun. 30, 2024].
    
4. S. Polu and I. Sutskever, Generative Language Modeling for Automated Theorem Proving. 2020. [Online]. Available: [https://arxiv.org/abs/2009.03393](https://arxiv.org/abs/2009.03393)
    
5. T. H. Trinh, Y. Wu, Q. V. Le, H. He, and T. Luong, “Solving olympiad geometry without human demonstrations,” Nature, vol. 625, no. 7995, pp. 476–482, 2024–1, doi: 10.1038/s41586-023-06747-5.
    
6. Z. Li et al., A Survey on Deep Learning for Theorem Proving. 2024. [Online]. Available: [https://arxiv.org/abs/2404.09939](https://arxiv.org/abs/2404.09939)
    
7. R. Kurzweil, The Age of Spiritual Machines: When Computers Exceed Human Intelligence. New York, NY, USA: Viking Penguin, 1999.
    
8. S. Levy, "The Big Interview with Ray Kurzweil," Wired, Jun. 13, 2024. [Online]. Available: [https://www.wired.com/story/big-interview-ray-kurzweil/](https://www.wired.com/story/big-interview-ray-kurzweil/) . [Accessed: Jun. 30, 2024].
    
9. L. Aschenbrenner, "SITUATIONAL AWARENESS: The Decade Ahead," situational-awareness.ai, Jun. 2024. [Online]. Available: [https://situational-awareness.ai/](https://situational-awareness.ai/) . [Accessed: Jun. 30, 2024].
    
10. D. Patel, "John Schulman (OpenAI Cofounder) - Reasoning, RLHF, & Plan for 2027 AGI," Dwarkesh Patel's Blog, May 15, 2024. [Online]. Available: [https://www.dwarkeshpatel.com/p/john-schulman](https://www.dwarkeshpatel.com/p/john-schulman) . [Accessed: Jun. 30, 2024].
    
11. O. Habryka, D. Kokotajlo, A. Cotra, and E. Erdil, "AI Timelines," AI Alignment Forum, Nov. 10, 2023. [Online]. Available: [https://www.alignmentforum.org/posts/K2D45BNxnZjdpSX2j/ai-timelines](https://www.alignmentforum.org/posts/K2D45BNxnZjdpSX2j/ai-timelines) . [Accessed: Jun. 30, 2024].
    
12. G. Sarvady, and Z. Kass, "AI Optimism- with a Dose of Reality," YouTube, Mar. 6, 2024. [Online Video]. Available: [https://www.youtube.com/watch?v=AIGOQHP_vmw&t=1205s](https://www.youtube.com/watch?v=AIGOQHP_vmw&t=1205s) . [Accessed: Jun. 30, 2024].
    
13. M. Kaput, "Sam Altman Says AI Will Handle '95%' of Marketing Work Done by Agencies and Creatives," Marketing AI Institute, Mar. 5, 2024. [Online]. Available: [https://www.marketingaiinstitute.com/blog/sam-altman-ai-agi-marketing](https://www.marketingaiinstitute.com/blog/sam-altman-ai-agi-marketing) . [Accessed: Jun. 30, 2024].
    
14. K. Roose, C. Newton, and D. Hassabis, "Demis Hassabis on Chatbots to AGI | EP 71," YouTube, Feb. 24, 2024. [Online Video]. Available: [https://www.youtube.com/watch?v=nwUARJeeplA&t=1910s](https://www.youtube.com/watch?v=nwUARJeeplA&t=1910s) . [Accessed: Jun. 30, 2024].
    
15. A. R. Sorkin, and J. Huang, "Jensen Huang of Nvidia on the Future of A.I. | DealBook Summit 2023," YouTube, Nov. 30, 2023. [Online Video]. Available: [https://www.youtube.com/watch?v=Pkj-BLHs6dE&t=439s](https://www.youtube.com/watch?v=Pkj-BLHs6dE&t=439s) . [Accessed: Jun. 30, 2024].
    
16. D. Patel, "Dario Amodei (Anthropic CEO) - Scaling, Alignment, & AI Progress," Dwarkesh Patel's Blog, Aug. 15, 2303. [Online]. Available: [https://www.dwarkeshpatel.com/p/dario-amodei](https://www.dwarkeshpatel.com/p/dario-amodei) . [Accessed: Jun. 30, 2024].
    
17. A. R. Sorkin, and E. Musk, "Elon Musk on Advertisers, Trust and the “Wild Storm” in His Mind | DealBook Summit 2023," YouTube, Nov. 30, 2023. [Online Video]. Available: [https://www.youtube.com/watch?v=2BfMuHDfGJI&t=3136s](https://www.youtube.com/watch?v=2BfMuHDfGJI&t=3136s) . [Accessed: Jun. 30, 2024].
    
18. D. Zhang, X. Huang, D. Zhou, Y. Li, and W. Ouyang, Accessing GPT-4 level Mathematical Olympiad Solutions via Monte Carlo Tree Self-refine with LLaMa-3 8B. 2024. [Online]. Available: [https://arxiv.org/abs/2406.07394](https://arxiv.org/abs/2406.07394)
    
19. R. Kurzweil, The Singularity Is Nearer: When We Merge with AI, 1st ed. New York, NY, USA: Viking, 2024.
    
20. J. Schaeffer et al., “Checkers Is Solved,” Science, vol. 317, no. 5844, pp. 1518–1522, 2007, doi: 10.1126/science.1144079.
    
21. H. Takizawa, Othello is Solved. 2024. [Online]. Available: [https://arxiv.org/abs/2310.19387](https://arxiv.org/abs/2310.19387)
    
22. 鹿島亮, 数理論理学. 朝倉書店, 2009.
    
23. Drösser, C. (2023, June 21). AI will become mathematicians' 'co-pilot'. Scientific American. [https://www.scientificamerican.com/article/ai-will-become-mathematicians-co-pilot/](https://www.scientificamerican.com/article/ai-will-become-mathematicians-co-pilot/)
    
24. Bioshok, "AIのもたらす深刻なリスクとその歴史的背景," Jan. 30, 2024. [Online]. Available: [https://docs.google.com/document/d/1Ojhwcnr72DGSH5zuZAxuGtwJmU7zKQs2zExEx-NRN_E/](https://docs.google.com/document/d/1Ojhwcnr72DGSH5zuZAxuGtwJmU7zKQs2zExEx-NRN_E/) .
