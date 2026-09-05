---
sidebar_label: "2022年8月実施 基礎科目 無機・物理化学"
tags:
  - Tohoku-University
  - Chemistry.Physical-Chemistry.Ideal-Gas-Thermodynamics
  - Chemistry.Physical-Chemistry.Entropy-Change
  - Chemistry.Inorganic-Chemistry
---
# 東北大学 工学研究科 化学・バイオ系 2022年8月実施 基礎科目 無機・物理化学

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 題意の要約（暫定）

【問2】物質量 $n$ の単原子理想気体を考える。そのモル内部エネルギーは

$$U_{\mathrm m}(T)=\frac32RT.$$

である。

1. 定積モル熱容量 $C_{V,\mathrm m}$ を求めよ。
2. 温度が $T_{\mathrm i}$ から $T_{\mathrm f}$ に変化する定積可逆過程のエントロピー変化を求めよ。
3. 体積が $V_{\mathrm i}$ から $V_{\mathrm f}$ に変化する等温可逆過程のエントロピー変化を求めよ。
4. 気体 A の初期状態は $300\,\mathrm K$、$1.00\,\mathrm{bar}$、$1.00\,\mathrm{dm^3}$、最終状態は $600\,\mathrm K$、$2.00\,\mathrm{dm^3}$ である。単原子理想気体と仮定し、エントロピーが状態関数であることを用いて全エントロピー変化を求めよ。

### 题目描述



【问题 2】考虑物质的量为 $n$ 的单原子理想气体，其摩尔内能为
   $$U_{\mathrm m}(T)=\frac32RT.$$
   1. 求定容摩尔热容 $C_{V,\mathrm m}$；
   2. 求气体从温度 $T_{\mathrm i}$ 变到 $T_{\mathrm f}$ 的定容可逆过程熵变；
   3. 求气体在温度不变时从体积 $V_{\mathrm i}$ 变到 $V_{\mathrm f}$ 的可逆过程熵变；
   4. 某气体 A 初态为 $300\,\mathrm K$、$1.00\,\mathrm{bar}$、$1.00\,\mathrm{dm^3}$，终态为 $600\,\mathrm K$、$2.00\,\mathrm{dm^3}$。假设为单原子理想气体，利用熵为状态函数求总熵变。

## **Kai**
### 【問 1】

### 【問 2】
#### (1)

$$
\begin{aligned}
C_{V, \mathrm{m}}
&= \frac{d}{dT} U_\mathrm{m} (T)
\\
&= \frac{3}{2} R
\end{aligned}
$$

#### (2)

$$
\begin{aligned}
\Delta S
&= \int_{T_\mathrm{i}}^{T_\mathrm{f}} \frac{n C_{V, \mathrm{m}}}{T} dT
\\
&= \frac{3}{2} nR \ln \frac{T_\mathrm{f}}{T_\mathrm{i}}
\end{aligned}
$$

#### (3)

$$
\begin{aligned}
\Delta S
&= \int_{V_\mathrm{i}}^{V_\mathrm{f}} \frac{p}{T} dV
\\
&= nR \int_{V_\mathrm{i}}^{V_\mathrm{f}} \frac{dV}{V}
\\
&= nR \ln \frac{V_\mathrm{f}}{V_\mathrm{i}}
\end{aligned}
$$

#### (4)
気体 A の物質量を $n$ モルとすると、

$$
\begin{aligned}
nR
&= \frac{1.00 \cdot 10^5 \cdot 1.00 \cdot 10^{-3}}{300}
\\
&= \frac{1}{3} \ \mathrm{( J \cdot K^{-1} )}
\end{aligned}
$$

である。

エントロピーは状態量であるから、次のように考えることができる。
$300 \ \mathrm{K}, 1.00 \ \mathrm{bar}, 1.00 \ \mathrm{dm^3}$
から定容で準静的に $600 \ \mathrm{K}$ に加熱したときのエントロピー変化は、
問 (2) より

$$
\begin{aligned}
\Delta S_1 &= \frac{1}{2} \ln 2
\end{aligned}
$$

であり、 $600 \ \mathrm{K}, 1.00 \ \mathrm{dm^3}$ から
等温で準静的に $2.00 \ \mathrm{dm^3}$ に膨張したときのエントロピー変化は、
問 (3) より

$$
\begin{aligned}
\Delta S_2 &= \frac{1}{3} \ln 2
\end{aligned}
$$

であるから、求めるエントロピー変化は

$$
\begin{aligned}
\Delta S_1 + \Delta S_2 &= \frac{5}{6} \ln 2\ \mathrm{J\,K^{-1}}
\end{aligned}
$$

である。
