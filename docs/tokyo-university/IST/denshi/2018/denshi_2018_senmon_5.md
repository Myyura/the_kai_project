---
sidebar_label: "専門 第5問"
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 電子情報学専攻 2018年度 専門 第5問 


## **Author**
[Josuke](https://www.xiaohongshu.com/user/profile/6136a1b40000000002025c4f?xhsshare=QQ&appuid=5de61ebb0000000001004b64&apptime=1718276766)

## **Description**
Answer the following questions about discrete signal processing. Here, $T$ is the sampling interval.

(1) Show the definition of the $Z$-transform $X(z)$ for the discrete signal series $x_n(n = 0,1,2,\cdots)$, which is defined for $n \ge 0$. Here, $z$ is a complex variable.

(2) Derive the transfer function $H(s)$ in the $s$-domain(the Laplace transform domain) of the circuit in Fig.1.

(3) The relationship between the Laplace transform and the $Z$-transform is described as $z = e^{sT}$. Derive the following approximation.

$$
s \simeq \frac{2}{T}\frac{1 - z^{-1}}{1 + z^{-1}}.
$$

You can use the following equation if necessary.

$$
e^{x} \simeq 1 + x.
$$

(4) Convert $H(s)$ to the transfer function $H(z)$ in the $z$-domain by using the approximation derived in (3). Here, we assume $T = 1$.

(5) Show a schematic of a discrete signal circuit that corresponds to $H(z)$ in (4).

(6) By taking the same procedure, show a schematic of a discrete signal circuit for the circuit shown in Fig.2.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2018_5_p1.png" width="400" height="400" alt=""/>
</figure>

## **Kai**
### (1)

$$
X(z) = \sum_{n = 0}^{\infty}x(n)z^{-n}
$$

### (2)

$$
H(s) = \frac{V_{out}(s)}{V_{in}(s)} = \frac{\frac{1}{sC}}{R + \frac{1}{sC}} = \frac{1}{1 + s}
$$

### (3)

$$
z^{-1} = e^{sT} = \frac{e^{-\frac{1}{2}sT}}{e^{\frac{1}{2}sT}} = \frac{1 - \frac{1}{2}sT}{1 + \frac{1}{2}sT}
$$

$$
\begin{aligned}
z^{-1}(1 + \frac{1}{2}sT) &= 1 - \frac{1}{2}sT \\
z^{-1} &= 1 - \frac{1}{2}sT(1 + z^{-1}) \\
1 - z^{-1} &= \frac{1}{2}sT(1 + z^{-1}) \\
s &= \frac{2}{T} \cdot \frac{1 - z^{-1}}{1 + z^{-1}}
\end{aligned}
$$

### (4)

$$
\begin{aligned}
H(s) &= \frac{1}{1 + s} = \frac{1}{1 + 2 \cdot \frac{1 - z^{-1}}{1 + z^{-1}}} = \frac{1 + z^{-1}}{3 - z^{-1}} \\
&= \frac{\frac{1}{3}}{1 - \frac{1}{3}z^{-1}} + \frac{\frac{1}{3}z^{-1}}{1 - \frac{1}{3}z^{-1}} 
\end{aligned}
$$

### (5)

$$
H(z) = \frac{Y(z)}{X(z)} = \frac{1 + z^{-1}}{3 - z^{-1}}
$$

$$
(3 - z^{-1})Y(z) = (1 + z^{-1})X(z)
$$

$$
Y(z) = \frac{1}{3}[X(z) + z^{-1}(X(z) + Y(z))]
$$

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2018_5_p2.png" width="700" height="140" alt=""/>
</figure>

### (6)

$$
H(s) = \frac{s}{1 + s}
$$

$$
H(z) = \frac{2 \cdot \frac{1 - z^{-1}}{1 + z^{-1}}}{1 + 2 \cdot \frac{1 - z^{-1}}{1 + z^{-1}}} = \frac{2 - 2z^{-1}}{3 - z^{-1}}
$$

$$
\frac{Y(z)}{X(z)} = \frac{2 - 2z^{-1}}{3 - z^{-1}}
$$

$$
Y(z) = \frac{1}{3}[2X(z) + z^{-1}(Y(z) - 2X(z))]
$$

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2018_5_p3.png" width="700" height="220" alt=""/>
</figure>