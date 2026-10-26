---
sidebar_label: "2014年8月実施 問1（熱工学）"
tags:
  - Kyushu-University
  - Physics.Thermodynamics.Diesel-Cycle
  - Physics.Thermodynamics.Polytropic-Process
---

# 九州大学 工学府 機械系専攻 2014年8月実施 熱工学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

ガスサイクルがあり，状態1→状態2は断熱圧縮過程，状態2→状態3は等圧加熱過程，状態3→状態4はポリトロープ膨張過程，状態4→状態1は等積放熱過程で，全ての過程は可逆過程である。作動ガスは温度によらず比熱が一定の理想気体とし，その気体定数を $R$，比熱比を $\kappa$ とする。状態1における温度および比体積は $T_1,v_1$ とする。ここで，状態2，3における比体積を $v_2,v_3$ としたとき $v_1/v_2=\varepsilon$，$v_3/v_2=\sigma$，$1<\sigma<\varepsilon$ である。さらに，状態3→状態4の過程におけるポリトロープ指数は $n$ であり $1<n<\kappa$ とする。作動ガスを加熱する場合の熱量を正として，以下の問いに答えよ。解答には，$T_1,\varepsilon,\sigma,R,\kappa,n$ のうち必要なものを用いよ。（55点）

**(1)** 状態2→状態3の間での単位質量あたりの作動ガスの加熱量 $q_{23}$ を求めよ。

**(2)** 状態3→状態4の間で単位質量あたりの作動ガスが外部へなす絶対仕事 $l_{34}$ を求めよ。つぎに，単位質量あたりの作動ガスを出入りする熱量 $q_{34}$ を求めよ。また，この過程は加熱過程，放熱過程のいずれであるかを示せ。

**(3)** 状態4→状態1の間に単位質量あたりの作動ガスを出入りする熱量 $q_{41}$ を求めよ。

**(4)** このサイクルにより単位質量あたりの作動ガスがなす絶対仕事 $l$ を求めよ。

**(5)** このサイクルの状態1，2，3は変更せずに，状態3→状態4を断熱膨張過程である状態3→状態4′に変更し，状態4′→状態1は等積放熱過程としたサイクル1→2→3→4′→1の熱効率 $\eta$ を求めよ。

### 题目描述

某气体循环中，状态1→2为绝热压缩，2→3为等压加热，3→4为多变膨胀，4→1为等容放热，所有过程均可逆。工质为比热不随温度变化的理想气体，气体常数为 $R$，比热比为 $\kappa$。状态1的温度、比体积分别为 $T_1,v_1$。状态2、3的比体积为 $v_2,v_3$，满足 $v_1/v_2=\varepsilon$、$v_3/v_2=\sigma$、$1<\sigma<\varepsilon$。过程3→4的多变指数为 $n$，且 $1<n<\kappa$。规定向工质加热的热量为正，回答下列问题；答案使用 $T_1,\varepsilon,\sigma,R,\kappa,n$ 中必要的量表示。（55分）

**(1)** 求过程2→3中单位质量工质的加热量 $q_{23}$。

**(2)** 求过程3→4中单位质量工质对外所做的绝对功 $l_{34}$，以及工质进出的热量 $q_{34}$。说明该过程是吸热还是放热过程。

**(3)** 求过程4→1中单位质量工质进出的热量 $q_{41}$。

**(4)** 求单位质量工质通过此循环所做的绝对功 $l$。

**(5)** 保持状态1、2、3不变，将过程3→4改为绝热膨胀过程3→4′，再经等容放热过程4′→1返回。求循环1→2→3→4′→1的热效率 $\eta$。

## **Kai**

比熱と各状態の温度は

$$
\begin{gathered}
c_v=\frac{R}{\kappa-1},\\
c_p=\frac{\kappa R}{\kappa-1},\\
T_2=T_1\varepsilon^{\kappa-1},\\
T_3=T_1\sigma\varepsilon^{\kappa-1},\\
T_4=T_1\sigma^n\varepsilon^{\kappa-n}.
\end{gathered}
$$

### (1)

$$
\boxed{q_{23}=c_p(T_3-T_2)=\frac{\kappa RT_1}{\kappa-1}\varepsilon^{\kappa-1}(\sigma-1).}
$$

### (2)

$p v^n=\text{一定}$ を積分すると

$$
\boxed{\begin{gathered}
l_{34}=\frac{R(T_3-T_4)}{n-1}\\
=\frac{RT_1}{n-1}\left(\sigma\varepsilon^{\kappa-1}-\sigma^n\varepsilon^{\kappa-n}\right).
\end{gathered}}
$$

第一法則より

$$
\boxed{\begin{gathered}
q_{34}=c_v(T_4-T_3)+l_{34}\\
=\frac{RT_1(\kappa-n)}{(\kappa-1)(n-1)}
\left(\sigma\varepsilon^{\kappa-1}-\sigma^n\varepsilon^{\kappa-n}\right).
\end{gathered}}
$$

$T_4/T_3=(\sigma/\varepsilon)^{n-1}<1$、$\kappa>n$ より $q_{34}>0$、したがって**加熱過程**である。

### (3)

$$
\boxed{\begin{gathered}
q_{41}=c_v(T_1-T_4)\\
=\frac{RT_1}{\kappa-1}
\left(1-\sigma^n\varepsilon^{\kappa-n}\right)<0.
\end{gathered}}
$$

### (4)

一周の内部エネルギー変化はゼロ、$q_{12}=0$ なので

$$
\boxed{l=\frac{RT_1}{\kappa-1}\left[\begin{gathered}
\kappa\varepsilon^{\kappa-1}(\sigma-1)\\
+\frac{\kappa-n}{n-1}\left(\sigma\varepsilon^{\kappa-1}-\sigma^n\varepsilon^{\kappa-n}\right)\\
+1-\sigma^n\varepsilon^{\kappa-n}
\end{gathered}\right].}
$$

### (5)

断熱膨張後の温度は $T_{4'}=T_3(\sigma/\varepsilon)^{\kappa-1}=T_1\sigma^\kappa$。よって

$$
\boxed{\begin{gathered}
\eta=1-\frac{c_v(T_{4'}-T_1)}{c_p(T_3-T_2)}\\
=1-\frac{\sigma^\kappa-1}{\kappa\varepsilon^{\kappa-1}(\sigma-1)}.
\end{gathered}}
$$
