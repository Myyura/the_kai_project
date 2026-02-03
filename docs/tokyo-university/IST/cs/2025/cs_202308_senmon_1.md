---
sidebar_label: "2024年8月実施 専門科目 問題1"
tags:
  - Tokyo-University
  - Formal-Languages-and-Automata-Theory
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2024年8月実施 専門科目 問題1

## **Author**
vv (co-authored with GPT 5.2 extended thinking, finalized by 祭音Myyura)

## **Description**
$\Sigma = \{a, b, c\}$ とする．$\Sigma$ 上の言語 $L \subseteq \Sigma^*$ に対して，言語 $\mathcal{H}(L)\subseteq \Sigma^*$ を以下によって定義する． 

$$
\mathcal{H}(L) = \{ w \in \Sigma^* \mid ww \in L \} 
$$

例えば，$L_1 = \{aa, abc, abab, baab, cca\}$ ならば，$\mathcal{H}(L_1) = \{a, ab\}$ である．以下の問いに答えよ． 

(1) $L_2$ を正規表現 $a(a+b)^*c(a+b)^*bc$ で表される言語とする．$\mathcal{H}(L_2)$ を正規表現として表せ． 

(2) 以下の有限オートマトンによって受理される言語を $L_3$ とする．ただし，初期状態は $q_0$ であり，受理状態の集合は $\{q_1\}$ である．$\mathcal{H}(L_3)$ を受理する状態数最小の決定性有限オートマトンを構成せよ．

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/cs_202308_senmon_1_p1.png" width="250" alt=""/>
</figure>

(3) 以下の命題 1 が真であるか否かを答え，真であればその証明を，そうでなければ簡単な説明とともに反例を示せ． 

- **命題 1**: $\Sigma$ 上のすべての正規言語 $L \subseteq \Sigma^*$ について，$\mathcal{H}(L)$ も正規言語である． 

(4) 以下の命題 2 が真であるか否かを答え，真であればその証明を，そうでなければ簡単な説明とともに反例を示せ． 

- **命題 2**: $\Sigma$ 上のすべての文脈自由言語 $L \subseteq \Sigma^*$ について，$\mathcal{H}(L)$ も文脈自由言語である．

## **Kai**
### (1)
先把 $L_2$ 的形状写清楚：任意 $s\in L_2$ 都可写成

$$
s = a,x,c,y,b,c,\quad x,y\in\{a,b\}^*
$$

因此 $s$ 中的字母 $c$ 恰好出现两次（中间一次、末尾一次）。

若 $ww\in L_2$，设 $w$ 中 $c$ 的个数为 $\#_c(w)$。则

$$
\#_c(ww)=2\#_c(w)=2
$$

所以 $\#_c(w)=1$。又因为 $ww$ 以 “$bc$” 结尾，所以第二个 $w$ 也以 “$bc$” 结尾，从而 $w$ 必须以 “$bc$” 结尾。结合 $\#_c(w)=1$，可知 $w$ 唯一的 $c$ 就是在末尾，于是

$$
w \in \{a,b\}^*bc
$$

另外 $ww\in L_2$ 还要求整个串以 $a$ 开头，所以 $w$ 也必须以 $a$ 开头。

再看 $L_2$ 中“中间那次 $c$”的位置：在 $ww$ 中第一处 $c$ 必然出现在第一个 $w$ 的末尾（因为 $w$ 唯一的 $c$ 在末尾），所以该 $c$ 正好落在两个 $w$ 的拼接边界处。于是第一个 $w$ 必须形如

$$
w = axc
$$

并且为了末尾是 $bc$，这里的 $x$ 必须以 $b$ 结尾，即 $x\in (a+b)^*b$。令 $x=u b$（其中 $u\in(a+b)^*$），则

$$
w = aubc
$$

反过来，任意 $w=aubc$（$u\in(a+b)^*$）都有

$$
ww = a(ub)c(a u)bc \in a(a+b)^*c(a+b)^*bc = L_2
$$

所以都属于 $\mathcal{H}(L_2)$。

因此

$$
\mathcal{H}(L_2)=\{a(a+b)^*bc\}
$$

用正则表达式表示为

$$
\boxed{a(a+b)^*bc}
$$

### (2)
先总结原 DFA 的关键性质（从图直接读出）：

* 读到 $a$：无论在 $q_0$ 还是 $q_1$，都会到 $q_0$（相当于“重置到 $q_0$”）。
* 读到 $b$：无论在 $q_0$ 还是 $q_1$，都会到 $q_1$（“重置到 $q_1$”）。
* 读到 $c$：在 $q_0\leftrightarrow q_1$ 间切换（“翻转”）。

对任意串 $w$，令它在状态集合 $\{q_0,q_1\}$ 上诱导的状态变换为

$$
f_w(q)=\hat\delta(q,w)
$$

那么

$$
ww\in L_3 \iff \hat\delta(q_0,ww)=q_1 \iff f_w(f_w(q_0))=q_1
$$

注意：一旦 $w$ 中出现过 $a$ 或 $b$，最后一次出现的 $a/b$ 会把状态“重置”为常量（全映到 $q_0$ 或全映到 $q_1$），之后末尾若干个 $c$ 只会在这两个常量间来回翻转。因此：

* 若 $w$ 不含 $a,b$，即 $w=c^k$，则 $f_w$ 是“恒等”(k 偶)或“交换”(k 奇)，都满足 $f_w^2(q_0)=q_0$，所以不在 $\mathcal{H}(L_3)$。
* 若 $w$ 含有 $a$ 或 $b$，则 $f_w$ 必为常量变换：要么把两状态都送到 $q_0$，要么都送到 $q_1$。只有当 $f_w$ 是“常量 $q_1$”时，才有 $f_w(f_w(q_0))=q_1$。

所以

$$
w\in\mathcal{H}(L_3)\iff \text{读完 }w\text{ 后，无论从 }q_0\text{ 还是 }q_1\text{ 出发都到 }q_1.
$$

把它翻译成“末尾结构”的条件：设 $w$ 的最后一个属于 $\{a,b\}$ 的字母为 $s$，其后有 $t$ 个 $c$（即 $w=\cdots s c^t$ 且之后不再有 $a,b$）。

* 若 $s=b$，读到 $b$ 重置到 $q_1$，再读 $t$ 个 $c$ 翻转 $t$ 次；要最终在 $q_1$，需 $t$ 为偶数。
* 若 $s=a$，读到 $a$ 重置到 $q_0$，再读 $t$ 个 $c$；要最终在 $q_1$，需 $t$ 为奇数。

并且必须“出现过 $a$ 或 $b$”（排除纯 $c^k$）。

接下来构造最小 DFA。只需要记住三种情况：

* $S$：至今还没见过 $a$ 或 $b$（只读到若干个 $c$）。这是初态，非接受。
* $R$：已经见过 $a/b$，但当前处于“拒绝型”（对应“末尾情况不满足”）。
* $A$：已经见过 $a/b$，且当前处于“接受型”（对应“末尾情况满足”）。这是唯一接受态。

转移规则由上面的“重置/翻转”直接给出：

* 从 $S$：
  $c$ 仍在 $S$；读到 $a$ 进入拒绝型 $R$；读到 $b$ 进入接受型 $A$。
* 从 $R$：
  读 $a$ 重置回 $R$；读 $b$ 重置到 $A$；读 $c$ 会翻转到 $A$。
* 从 $A$：
  读 $a$ 重置到 $R$；读 $b$ 留在 $A$；读 $c$ 翻转到 $R$。

用转移表表示（字母表 $\{a,b,c\}$）：

| 状态       | $a$ | $b$ | $c$ |
| -------- | --- | --- | --- |
| $S$（初态）  | $R$ | $A$ | $S$ |
| $R$      | $R$ | $A$ | $A$ |
| $A$（接受态） | $R$ | $A$ | $R$ |

这台 DFA 的接受态集合为 $\{A\}$。

最小性说明：三状态不可再合并。因为

* $\varepsilon$（停在 $S$）不被接受，但串 $b$（停在 $A$）被接受，故 $S\not\sim A$。
* 串 $a$（停在 $R$）不被接受，但 $ac$ 被接受，且 $\varepsilon c=c$ 不被接受，故 $S\not\sim R$。
* $R$ 与 $A$ 一个拒绝一个接受，显然可区分。

因此最少需要 3 个状态，上述构造即为最小 DFA。

### (3) 结论：真
设 $L$ 是正则语言，被某个 DFA

$$
M=(Q,\Sigma,\delta,q_0,F)
$$

识别。对任意串 $w\in\Sigma^*$，定义它在状态集合上的“整体迁移函数”

$$
\tau_w:Q\to Q,\qquad \tau_w(q)=\hat\delta(q,w)
$$

那么

$$
\begin{aligned}
w\in \mathcal{H}(L) &\iff ww\in L\\
&\iff \hat\delta(q_0,ww)\in F\\
&\iff \hat\delta(\hat\delta(q_0,w),w)\in F\\
&\iff \tau_w(\tau_w(q_0))\in F
\end{aligned}
$$

关键点：$\tau_w$ 只是 $Q$ 到 $Q$ 的函数，而 $Q$ 有限，因此所有函数 $Q\to Q$ 的集合

$$
T = Q^Q
$$

是有限集合（大小为 $|Q|^{|Q|}$）。

据此构造一个新的 DFA $M'$ 来识别 $\mathcal{H}(L)$：

* 状态集合：$T$（所有函数 $Q\to Q$）。
* 初态：恒等函数 $\mathrm{id}_Q$（对应空串的迁移）。
* 读入一个字母 $x\in\Sigma$ 时的更新：令 $\tau_x(q)=\delta(q,x)$（单字母的迁移），则 $\delta'(\varphi,x)=\tau_x\circ \varphi$. 这样读完 $w$ 后，$\varphi$ 恰为 $\tau_w$。
* 接受态集合：$F'=\{\varphi\in T\mid \varphi(\varphi(q_0))\in F\}$.

于是对任意 $w$，$M'$ 读完 $w$ 后所在状态为 $\tau_w$，而接受条件正是 $\tau_w(\tau_w(q_0))\in F$，等价于 $ww\in L$。因此 $L(M')=\mathcal{H}(L)$。

由于 $M'$ 是有限自动机（状态数有限），$\mathcal{H}(L)$ 是正则语言。命题 1 成立。

### (4) 结论：假
给出一个上下文无关语言 $L$，使得 $\mathcal{H}(L)$ 不是上下文无关语言。

取

$$
L=\underbrace{\{a^n b^n c^k \mid n,k\ge 0\}}_{L_1}\ \underbrace{\{a^i b^m c^m \mid i,m\ge 0\}}_{L_2}
$$

也就是

$$
L=\{a^n b^n c^k a^i b^m c^m \mid n,k,i,m\ge 0\}
$$

说明 $L$ 是 CFL：

$L_1$ 是 CFL（例如文法 $S_1\to aS_1b\mid T,\ T\to cT\mid\varepsilon$）；

$L_2$ 也是 CFL（例如 $S_2\to A,B,\ A\to aA\mid\varepsilon,\ B\to bBc\mid\varepsilon$）；

而 CFL 对连接封闭，所以 $L=L_1L_2$ 为 CFL。

接下来证明 $\mathcal{H}(L)$ 不是 CFL。考虑正则语言

$$
R=a^*b^*c^*.
$$

若 $\mathcal{H}(L)$ 是 CFL，则由于 CFL 与正则语言交仍为 CFL，$\mathcal{H}(L)\cap R$ 也应是 CFL。

我们计算 $\mathcal{H}(L)\cap R$。设 $w\in R$，则

$$
w=a^p b^q c^r \quad(p,q,r\ge 0).
$$

那么

$$
ww=a^p b^q c^r a^p b^q c^r
$$

断言：对这类 $w$，有

$$
ww\in L \iff p=q=r
$$

理由如下。

* 若 $ww\in L=L_1L_2$，则存在分割 $ww=xy$ 使得 $x\in L_1=a^n b^n c^*$，$y\in L_2=a^* b^m c^m$。因为 $x$ 必须先读完一段 $a^n$ 再读 $b^n$。在 $ww$ 的开头，$a$ 是一整段 $a^p$。若 $n<p$，则在读完 $a^n$ 后下一个符号仍是 $a$，不可能开始 $b^n$。所以必须 $n=p$。同理，为了让 $x$ 的 $b^n$ 紧接在这 $a^p$ 之后，必须正好消耗掉开头的全部 $b^q$，因此还要 $q=p$。否则 $q\neq p$ 会导致 $x$ 进入 $c^*$ 前还残留或不足 $b$，无法匹配。于是 $p=q$，并且此时 $x$ 只能是 $a^p b^p c^t$（$t\le r$）。若 $t<r$，则 $y$ 将以 $c$ 开头，但 $L_2$ 的串必须形如 $a^*b^m c^m$，不能以 $c$ 开头，因此必须 $t=r$。所以分割点被迫落在两个拷贝之间：$x=a^p b^p c^r$，$y=a^p b^p c^r$。现在 $y\in L_2$ 要求其后半部分 $b^p c^r$ 满足 $p=r$。结合 $p=q$，得到 $p=q=r$。
* 反过来，若 $p=q=r$，则 $ww=a^p b^p c^p\ a^p b^p c^p$ 显然可取 $x=a^p b^p c^p\in L_1$，$y=a^p b^p c^p\in L_2$，所以 $ww\in L$。

因此对于 $w\in R$，

$$
\begin{aligned}
w\in \mathcal{H}(L) &\iff ww\in L \\
&\iff p=q=r \\
&\iff w\in \{a^n b^n c^n\mid n\ge 0\}
\end{aligned}
$$

也就是说

$$
\mathcal{H}(L)\cap \{a^n b^n c^n\mid n\ge 0\}
$$

而 $\{a^n b^n c^n\mid n\ge 0\}$ 是经典的“非上下文无关语言”。于是 $\mathcal{H}(L)\cap R$ 不是 CFL，矛盾。

所以 $\mathcal{H}(L)$ 不可能是 CFL。命题 2 为假。
