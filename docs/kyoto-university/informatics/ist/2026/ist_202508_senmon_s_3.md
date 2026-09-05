---
sidebar_label: 2025年8月実施 専門科目 S-3
tags:
  - Kyoto-University
  - Computer-Science.Information-Theory.Entropy
  - Computer-Science.Information-Theory.Huffman-Coding
  - Computer-Science.Information-Theory.Coding-Efficiency
  - Probability-Statistics.Stochastic-Processes.Markov-Information-Source
  - Computer-Science.Information-Theory.Entropy-Rate
---
# 京都大学 情報学研究科 知能情報学専攻 2025年8月実施 専門科目 S-3

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

[大学公表の原題](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2025_ist.pdf)
Answer the following questions. All logarithms are base 2 ($\log_2$). For calculations, you must use $\log_2 3 = 1.6$ and $\log_2 5 = 2.3$. Also, round to two decimal places if necessary.

**Q.1** Consider a memoryless stationary source $S$ defined by the alphabet $A = \{a, b, c, d, e, f\}$, where each symbol occurs independently. Their probabilities of occurrence are $P(a) = 0.30, P(b) = 0.25, P(c) = 0.15, P(d) = 0.10, P(e) = 0.10, \text{and } P(f) = 0.10$.

(1) Calculate the entropy $H(S)$.

(2) Design a binary Huffman code based on the above probabilities. Draw a Huffman tree (code tree for an instantaneous code).

(3) Calculate the average code length $L$ of the binary Huffman code in (2).

**Q.2** Consider a first-order Markov source $M$ defined by the alphabet $A' = \{a, b, c\}$, where the symbols themselves represent the states, and the following transition probability matrix $P$.

$$ 
P = \begin{bmatrix} 0.60 & 0.15 & 0.25 \\ 0.10 & 0.65 & 0.25 \\ 0.10 & 0.15 & 0.75 \end{bmatrix} 
$$

For example, if the current symbol is $a$, the probabilities that the next symbol will be $a, b, \text{or } c$ are $0.60, 0.15, \text{and } 0.25$, respectively.

(1) Calculate the stationary distribution $\boldsymbol{\pi} = (\pi_a, \pi_b, \pi_c)$ of this Markov process. Considering a memoryless source $S'$ based on the stationary distribution, calculate its entropy $H(S')$.

(2) Calculate the entropy rate (entropy per symbol) $H(M)$ of the Markov source $M$.

(3) Compare the magnitudes of $H(S')$ and $H(M)$, and explain the reason for their difference.

**Q.3** Variable-length blocks are created by concatenating one or more characters from the set $A = \{a, b, c, d, e, f\}$. Let the set of five variable-length blocks $A'' = \{ab, ba, cab, dabf, e\}$ be an alphabet in which each element represents a single symbol. For this set $A''$, consider a memoryless stationary source $W$ in which each symbol occurs independently. The probabilities of occurrence for each variable-length block are $P(ab) = 0.25, P(ba) = 0.25, P(cab) = 0.20, P(dabf) = 0.15, \text{and } P(e) = 0.15$.

(1) Evaluate the coding efficiency of the source $W$ at the character level. First, design a binary Huffman code for $W$, and calculate the average code length per block ($L_{\text{block}}$). Furthermore, calculate the average code length per character for this code. Here, the average code length per character is defined as $L_{\text{char}} = L_{\text{block}}/n_{\text{block}}$, where $n_{\text{block}}$ is the average number of characters in $A$ per source symbol of the variable-length block information source. For example, the block $ba$ consists of two characters in $A$, so its number of characters is 2.

(2) After determining the probability distribution of the characters generated from $W$, consider the average code length of a (binary) Huffman code for a memoryless source that follows this distribution. Discuss the magnitude difference (i.e., which is larger) between the average code length obtained here and the average code length per character found in (1), and explain its cause.

### 题目描述

回答下列问题。所有对数均以 2 为底，即 $\log_2$。计算时必须使用 $\log_2 3=1.6$、$\log_2 5=2.3$；必要时四舍五入到小数点后两位。

1. 考虑字母表

   $$
   A=\{a,b,c,d,e,f\}
   $$

   上的无记忆平稳信源 $S$，各符号独立出现，概率为

   $$
   P(a)=0.30,\quad P(b)=0.25,\quad P(c)=0.15,\quad
   P(d)=P(e)=P(f)=0.10.
   $$

   （1）计算熵 $H(S)$。

   （2）根据上述概率设计二元 Huffman 码，并画出 Huffman 树（即时码的码树）。

   （3）计算第（2）问二元 Huffman 码的平均码长 $L$。

2. 考虑字母表 $A'=\{a,b,c\}$ 上的一阶 Markov 信源 $M$，符号本身就是状态，转移概率矩阵为

   $$
   P=
   \begin{bmatrix}
   0.60&0.15&0.25\\
   0.10&0.65&0.25\\
   0.10&0.15&0.75
   \end{bmatrix}.
   $$

   例如当前符号为 $a$ 时，下一个符号为 $a,b,c$ 的概率依次为 $0.60,0.15,0.25$。

   （1）计算该 Markov 过程的平稳分布

   $$
   \boldsymbol{\pi}=(\pi_a,\pi_b,\pi_c).
   $$

   再把该平稳分布视为无记忆信源 $S'$ 的符号分布，计算其熵 $H(S')$。

   （2）计算 Markov 信源 $M$ 的熵率（每符号熵）$H(M)$。

   （3）比较 $H(S')$ 与 $H(M)$ 的大小，并解释二者不同的原因。

3. 从 $A=\{a,b,c,d,e,f\}$ 中连接一个或多个字符形成变长块。把五个变长块

   $$
   A''=\{ab,ba,cab,dabf,e\}
   $$

   视为五个单独符号，考虑其上的无记忆平稳信源 $W$。各变长块独立出现，概率为

   $$
   P(ab)=0.25,\quad P(ba)=0.25,\quad P(cab)=0.20,\quad
   P(dabf)=0.15,\quad P(e)=0.15.
   $$

   （1）从字符层面评价信源 $W$ 的编码效率。先为 $W$ 设计二元 Huffman 码并计算每块平均码长 $L_{\mathrm{block}}$，再计算该码的每字符平均码长。定义

   $$
   L_{\mathrm{char}}=\frac{L_{\mathrm{block}}}{n_{\mathrm{block}}},
   $$

   其中 $n_{\mathrm{block}}$ 是变长块信源每个源符号所含 $A$ 中字符数的平均值。例如块 $ba$ 由两个 $A$ 中的字符组成，字符数为 2。

   （2）先确定 $W$ 生成的各字符的概率分布，再考虑服从该分布的无记忆信源的二元 Huffman 码平均码长。比较此处所得平均码长与第（1）问每字符平均码长的大小，并解释差异产生的原因。

## **Kai**

### Q.1

(1) 按题设的对数近似，$-\log 0.3=1.7$、$-\log 0.15=2.7$、$-\log0.1=3.3$。因此

$$H(S)=0.3(1.7)+0.25(2)+0.15(2.7)+0.3(3.3)=2.405\simeq\boxed{2.41\ \text{bit/符号}}.$$

(2) 一组 Huffman 合并次序是

$$0.10+0.10=0.20,\quad0.10+0.15=0.25,\quad0.20+0.25=0.45,\quad0.25+0.30=0.55,\quad0.45+0.55=1.$$

相同概率之间可以任选顺序。以下码树给出一种选择。

![Huffman code tree](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/ist/2026/kyoto-ist-2025-huffman.svg)

|符号|$a$|$b$|$c$|$d$|$e$|$f$|
|---|---|---|---|---|---|---|
|码字|11|01|101|000|001|100|

(3) $L=2(0.30+0.25)+3(0.15+0.10+0.10+0.10)=\boxed{2.45}$ bit/符号。

### Q.2

(1) 解 $\boldsymbol\pi P=\boldsymbol\pi$、$\pi_a+\pi_b+\pi_c=1$ 得

$$\boldsymbol\pi=(0.2,0.3,0.5),\qquad H(S')=0.2(2.3)+0.3(1.7)+0.5(1)=\boxed{1.47}.$$

所有转移概率均为正，因而平稳分布唯一。

(2) 熵率为条件熵

$$H(M)=-\sum_i\pi_i\sum_jP_{ij}\log P_{ij}.$$

沿用 $\log3=1.6$、$\log5=2.3$，三个状态对应的条件熵为

$$h_a=1.325,\quad h_b=0.83+0.65(4.3-\log13),\quad h_c=1.035.$$

故

$$H(M)=1.87-0.195\log13.$$

进一步取 $\log_2 13\simeq3.70044$，得到 $\boxed{H(M)\simeq1.15}$ bit/符号。

(3) $H(S')>H(M)$。前者忽略相邻符号的依赖，后者利用当前状态对下一符号的预测信息。准确的熵满足

$$H(S')-H(M)=I(X_t;X_{t+1})>0,$$

因为三行转移分布并不相同，各状态又均具有正概率。

### Q.3

(1) 为块 $cab,ab,ba,dabf,e$ 分别赋码 $00,01,10,110,111$，符合 Huffman 合并 $0.15+0.15=0.30$、$0.20+0.25=0.45$、$0.25+0.30=0.55$。

$$L_{\mathrm{block}}=2(0.20+0.25+0.25)+3(0.15+0.15)=2.30,$$

$$n_{\mathrm{block}}=2(0.25+0.25)+3(0.20)+4(0.15)+0.15=2.35.$$

因此 $L_{\mathrm{char}}=2.30/2.35=46/47\simeq\boxed{0.98}$ bit/字符。

(2) 每块中 $a,b,c,d,e,f$ 的期望出现次数依次为 $(0.85,0.85,0.20,0.15,0.15,0.15)$，除以平均块长得到字符分布

$$\frac1{47}(17,17,4,3,3,3).$$

Huffman 合并的整数权重依次为 $6,7,13,30,47$，所以平均码长为

$$\frac{6+7+13+30+47}{47}=\frac{103}{47}\simeq\boxed{2.19}\ \text{bit/字符}.$$

例如 $a,b,c,d,e,f$ 可分别取 $0,11,1011,1000,1001,1010$。块编码利用了字符只按给定五种块组合出现的结构；按单字符边缘分布构造的无记忆模型舍弃了这种依赖，因而这里的平均码长更大。
