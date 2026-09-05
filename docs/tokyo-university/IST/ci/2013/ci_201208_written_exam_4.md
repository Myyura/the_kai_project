---
sidebar_label: '2012年8月実施 筆記試験 第4問'
tags:
  - Tokyo-University
  - Computer-Science.Formal-Languages.Nondeterministic-Polynomial-Time-Completeness
  - Computer-Science.Programming.Tail-Recursion
  - Electrical-Electronic.Control-Theory.Step-Response
  - Electrical-Electronic.Control-Theory.Transfer-Function
  - Electrical-Electronic.Signal-Processing.Discrete-Cosine-Transform
  - Computer-Science.Security.Public-Key-Cryptography
  - Computer-Science.Networks.Domain-Name-System
  - Computer-Science.Computer-Architecture.Translation-Lookaside-Buffer
  - Computer-Science.Formal-Languages.Left-to-Right-Leftmost-Derivation-One-Lookahead-Parsing
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2012年8月実施 筆記試験 第4問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki), 祭音Myyura

## **Description**

[Official examination, archived Japanese PDF](https://web.archive.org/web/20151118065535id_/http://i-web.i.u-tokyo.ac.jp/edu/course/ci/pdf/2012-8-exam.pdf).

### 日本語

以下に示す情報システムに関する8項目から<u>4項目</u>を選択し、各項目を4～8行程度で説明せよ。必要に応じて例や図を用いてよい。

1) NP 完全性
2) 末尾再帰
3) ステップ応答と伝達関数
4) 離散コサイン変換(DCT)
5) 公開鍵暗号
6) DNS (Domain Name Service)
7) TLB (Translation Lookaside Buffer)
8) LL(1)構文解析

### English
Select <u>four items</u> out of the following eight items concerning information systems, and explain each item in approximately 4~8 lines of text.
If necessary, use examples or figures.

1) NP-complete
2) Tail recursion
3) Step response and transfer function
4) Discrete Cosine Transform, DCT
5) Public-key cryptosystem
6) DNS (Domain Name Service)
7) TLB (Translation Lookaside Buffer)
8) LL(1) parsing

### 题目描述

从下列八个信息系统相关主题中任选四个，每个用约 4～8 行说明；必要时可使用示例或图。

1. NP 完全性。
2. 尾递归。
3. 阶跃响应与传递函数。
4. 离散余弦变换（DCT）。
5. 公钥密码体制。
6. DNS（域名系统）。
7. TLB（地址转换后备缓冲器）。
8. LL(1) 语法分析。

## **Kai**

All eight items are explained for reference; the examination asks for any four.

### (1) NP-completeness

A decision problem $Y$ is NP-complete if $Y\in\mathrm{NP}$ and every problem $X\in\mathrm{NP}$ admits a polynomial-time many-one reduction $X\le_PY$. Membership in NP means that each yes-instance has a polynomial-size certificate verifiable in polynomial time. NP-complete problems are thus exactly the problems that are both in NP and NP-hard. If any NP-complete problem has a polynomial-time algorithm, then $\mathrm P=\mathrm{NP}$; a proof that all require super-polynomial time is not known. Boolean satisfiability (SAT) is the classic Cook–Levin theorem example; Circuit-SAT is also NP-complete. See [Cook's 1971 paper](https://doi.org/10.1145/800157.805047).

### (2) Tail recursion

A recursive call is in tail position when its result is returned directly, with no pending computation after the call. For example, factorial can carry its product in an accumulator: $f(0,a)=a$ and $f(n,a)=f(n-1,na)$ for integer $n>0$, with initial call $f(n,1)$. If the language implementation performs tail-call optimization, one stack frame can be reused, giving $O(1)$ call-stack space; tail recursion alone does not guarantee that an implementation applies this optimization. Arbitrary-precision products still require space for the growing integer. The ordinary expression $n f(n-1)$ is not tail-recursive because multiplication remains after the call.

### (3) Step response and transfer function

For a continuous-time linear time-invariant system with zero initial conditions, the transfer function is $G(s)=Y(s)/U(s)$ in the Laplace domain. A unit step has transform $1/s$, so its response satisfies $Y_{\mathrm{step}}(s)=G(s)/s$ and is obtained by inverse Laplace transformation. For example, $G(s)=K/(\tau s+1)$ with $\tau>0$ gives $y_{\mathrm{step}}(t)=K(1-e^{-t/\tau})$ for $t\ge0$. Conversely, $G(s)=sY_{\mathrm{step}}(s)$ under the same zero-state assumptions. The transient describes rise time, overshoot and settling behavior; final-value arguments require their stability/pole conditions and cannot be applied to every transfer function indiscriminately.

### (4) Discrete cosine transform

A DCT represents a real finite sequence as coefficients of real cosine basis functions. One common convention is the orthonormal DCT-II:

$$
X_k=\alpha_k\sum_{j=0}^{N-1}x_j\cos\!\left[\frac\pi N(j+\tfrac12)k\right],\quad
\alpha_0=\frac1{\sqrt N},\quad\alpha_k=\sqrt{\frac2N}\ (k>0).
$$

The basis is orthonormal, so the inverse is its transpose and the full transform preserves squared energy. Smooth, correlated data often concentrates energy in low-frequency coefficients; image codecs can quantize high-frequency coefficients more coarsely. The transform alone is invertible and does not itself discard information—the subsequent quantization or coefficient removal is lossy. Several DCT types and normalizations exist; the convention must be specified, as in the [SciPy DCT documentation](https://docs.scipy.org/doc/scipy/reference/generated/scipy.fft.dct.html).

### (5) Public-key cryptosystem

An asymmetric cryptosystem uses a public key that may be distributed and a related private key that must remain secret. For public-key encryption, a sender encrypts for the receiver using the receiver's public key, and the receiver decrypts using the private key. Digital signatures instead use a signing key and a corresponding public verification key to authenticate messages; signing is not generically “encrypting with the private key.” Schemes rely on stated computational assumptions and correct parameter, padding and protocol choices. In practice a public-key mechanism commonly establishes a symmetric session key for bulk encryption, and the public key must be authenticated to prevent key substitution. RSA encryption and signatures, for example, are specified as distinct schemes in [RFC 8017](https://www.rfc-editor.org/rfc/rfc8017.html).

### (6) DNS

DNS is the **Domain Name System**; the question's expansion “Domain Name Service” refers to the service it provides. It is a hierarchical, distributed database of resource records, including A/AAAA addresses, MX mail routing, NS delegation and CNAME aliases. A resolver obtains answers from authoritative servers, often through a recursive resolver that follows delegations from cached or root information. Caches retain records according to their TTLs, reducing latency and query load while allowing temporarily stale answers after updates. DNS is more than a one-to-one mapping between names and IP addresses, and ordinary DNS does not itself provide confidentiality or authenticated answers. Its core architecture is described in [RFC 1034](https://www.rfc-editor.org/rfc/rfc1034.html).

### (7) TLB

A translation lookaside buffer caches virtual-page to physical-frame translations together with relevant address-space tags and permissions. On a hit, the processor can translate an address without walking the page table. A miss triggers a hardware walk or a software-managed refill; if a valid, permitted mapping is found, the access continues without a page fault. A missing page-table mapping or a permissions violation causes an appropriate exception instead. In particular, an invalid **TLB entry** merely fails to supply a hit and is not itself evidence of an invalid virtual page. Context changes and page-table updates require appropriate tags or invalidation so stale translations are not reused.

### (8) LL(1) parsing

An LL(1) parser reads input left to right, constructs a leftmost derivation, and chooses a production using one lookahead token. For each production $A\to\alpha$, enter it under terminals in $\mathrm{FIRST}(\alpha)\setminus\{\varepsilon\}$; if $\alpha\Rightarrow^*\varepsilon$, also enter it under terminals in $\mathrm{FOLLOW}(A)$, including the end marker where applicable. A grammar is LL(1) precisely when no table cell receives different productions. The FOLLOW rule applies to any nullable right-hand side, not only to a literal $A\to\varepsilon$ production. For example, $S\to aS\mid\varepsilon$ chooses the first production on `a` and the second on end of input. Left recursion or conflicting common prefixes can prevent one-token predictive parsing.
