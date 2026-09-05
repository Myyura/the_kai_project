---
sidebar_label: 2013年8月実施 プログラミング
tags:
  - Tokyo-University
  - Computer-Science.Programming
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2013年8月実施 プログラミング

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

### 日本語（原巻に基づく独立した題意要約）

[大学公式 PDF の保存版](https://web.archive.org/web/20151118065532id_/http://i-web.i.u-tokyo.ac.jp/edu/course/ci/pdf/2013-8-program.pdf)に基づく独立した題意要約（逐語転載ではない）。

$d$ に対する格子点集合を $\{(dp,dq):p,q\in\mathbb Z\}$ とし、領域 $R$ 内にあるその点の個数を $A(d,R)$ とする。領域の境界も含める。

$$
R_0=\{(x,y):0\le x\le10,\ 0\le y\le10\},\qquad
R_1=\{(x,y):(x-5)^2+(y-5)^2\le25\}.
$$

例えば $A(1,R_0)=121$ である。

1. 浮動小数点数 $d$ を入力として、$A(d,R_0)$ を求めるプログラムを作る。
2. 同じく $d$ を入力し、$\displaystyle \frac{A(d,R_1)}{A(d,R_0)}\times\frac14$ を計算する。
3. 頂点 $(0,0),(10,0),(5,5\sqrt3)$ の正三角形を $K_0$ とする。各辺を三等分し、中央の三分の一を底辺とする正三角形を外側に付け、その底辺を除く操作を全辺に施す。この操作を $n$ 回行った閉領域を $K_n$ とする。$K_2$ の面積を浮動小数点数で出力する。
4. 正整数 $n$ を入力し、$K_n$ の面積を浮動小数点数で計算する。
5. $d$ を入力し、$A(d,K_2)$ を計算する。
6. $d$ と正整数 $n$ を入力し、$A(d,K_n)$ を計算する。

![格子およびコッホ雪片](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci/2014/tokyo-ci-2013-koch.svg)

### 题目描述

令 $A(d,R)$ 表示格点集合 $\{(dp,dq):p,q\in\mathbb Z\}$ 中落在区域 $R$ 内的点数，边界上的点也计入。考虑正方形 $R_0=[0,10]\times[0,10]$ 和内切圆盘 $R_1=\{(x,y):(x-5)^2+(y-5)^2\le25\}$，例如 $A(1,R_0)=121$。

1. 输入浮点数 $d$，编程计算 $A(d,R_0)$。
2. 输入 $d$，计算 $\frac{A(d,R_1)}{A(d,R_0)}\times\frac14$。
3. 以顶点 $(0,0),(10,0),(5,5\sqrt3)$ 的正三角形为 $K_0$。每次把各边三等分，在中间一段向外添加正三角形并删除其底边；操作 $n$ 次所得闭区域记为 $K_n$。用浮点数输出 $K_2$ 的面积。
4. 输入正整数 $n$，计算 $K_n$ 的面积。
5. 输入 $d$，计算 $A(d,K_2)$。
6. 输入 $d$ 和正整数 $n$，计算 $A(d,K_n)$。

## **Kai**

### (1) Square count

For $d>0$, each coordinate has $\lfloor10/d\rfloor+1$ permitted values, including zero and the upper boundary when it is a lattice coordinate. Hence

$$
\boxed{A(d,R_0)=(\lfloor10/d\rfloor+1)^2.}
$$

A negative spacing gives the same lattice as $|d|$. For $d=0$, the lattice set has just one distinct point, the origin, so $A(0,R_0)=1$. Counting integer pairs instead would incorrectly count that same point infinitely many times.

### (2) Disk count

For each permitted horizontal coordinate $di$, count integer $j$ satisfying

$$
(di-5)^2+(dj-5)^2\le25.
$$

For decimal input $d=a/b>0$, use the exact integer comparison

$$
(ai-5b)^2+(aj-5b)^2\le25b^2.
$$

For fixed $i$, take the integer square root $r=\lfloor\sqrt{25b^2-(ai-5b)^2}\rfloor$ and count

$$
\max\left(0,\left\lfloor\frac{5b+r}{a}\right\rfloor-
\left\lceil\frac{5b-r}{a}\right\rceil+1\right)
$$

within the square's coordinate range. This is $O(1/d)$ columns rather than an $O(1/d^2)$ two-dimensional scan, apart from integer arithmetic cost. At $d=1$ the disk has 81 points and the requested value is $81/(4\cdot121)=81/484$.

As $d\to0^+$, the disk-to-square count ratio tends to $\pi/4$, so the quantity in (2) tends to $\pi/16$.

### (3) and (4) Snowflake area

The initial area is $S_0=25\sqrt3$. At iteration $k\ge1$, there are $3\cdot4^{k-1}$ new equilateral triangles, each with side $10/3^k$. Their total area is

$$
\Delta S_k=\frac{S_0}{3}\left(\frac49\right)^{k-1}.
$$

Summing this geometric series gives

$$
\boxed{S_n=S_0\left[1+\frac13\frac{1-(4/9)^n}{1-4/9}\right]
=25\sqrt3\left[\frac85-\frac35\left(\frac49\right)^n\right].}
$$

In particular,

$$
\boxed{S_2=\frac{1000\sqrt3}{27}\approx64.1500299099584.}
$$

This formula needs constant storage and avoids generating all $3\cdot4^n$ sides just to obtain the area.

### (5) and (6) Lattice points in a snowflake

Generate the polygon in counterclockwise order. Replace each oriented side $AB$ by the four edges through

$$
A,\quad A+v,\quad A+v+R(-\pi/3)v,\quad A+2v,\quad B,
\qquad v=(B-A)/3.
$$

The negative 60-degree turn puts the new triangle outside a counterclockwise polygon. Enumerate lattice points in the polygon's bounding box, and test membership by a winding-number algorithm that explicitly includes points on any edge. Negative lattice indices must be included: the snowflake extends below the original triangle.

Floating-point orientation tests can misclassify boundary points. The implementation below stores a polygon vertex as $(x,Y)$ representing the physical point $(x,\sqrt3Y)$, with $x,Y$ rational. Every construction step preserves that representation. A cross product between a rational lattice point and a polygon edge has the form $a+b\sqrt3$; its sign is decided exactly by signs and a comparison of $a^2$ with $3b^2$, without a tolerance. The bounding box uses exact integer square roots too.

There are $E=3\cdot4^n$ sides. If the bounding box contains $L$ candidate lattice points, this direct method uses $O(E)$ storage and $O(LE)$ arithmetic operations. It is a simple complete solution for finite input sizes; finer grids and larger $n$ may require spatial indexing or scan-line acceleration.

### Complete Python program

The program uses the standard library. Decimal input is interpreted as its exact rational value, so values such as `0.1` do not acquire binary floating-point rounding before boundary tests. Parts (3) and (4) return the required floating-point areas. Save the code as `koch.py`; for example, `python koch.py 6 --d 1 --n 2` prints 65.

```python
from fractions import Fraction as F
from math import floor, ceil, isqrt, sqrt


def spacing(text):
    # Decimal input is interpreted exactly, including scientific notation.
    return abs(F(str(text)))


def count_square(d):
    if d == 0:
        return 1  # The set {(dp,dq)} then contains only the origin.
    return (floor(F(10) / d) + 1) ** 2


def count_disk(d):
    if d == 0:
        return 0
    a, b = d.numerator, d.denominator
    limit = (10 * b) // a
    total = 0
    for i in range(limit + 1):
        remaining = 25*b*b - (a*i - 5*b)**2
        if remaining < 0:
            continue
        r = isqrt(remaining)
        # |a*j-5*b| <= sqrt(remaining), with integer a*j-5*b.
        lo = max(0, -(-(5*b-r) // a))
        hi = min(limit, (5*b+r) // a)
        total += max(0, hi-lo+1)
    return total


def koch_vertices(n):
    if n < 0:
        raise ValueError('n must be nonnegative')
    # Store (x,Y), meaning the physical point (x,sqrt(3)*Y).
    points = [(F(0), F(0)), (F(10), F(0)), (F(5), F(5))]
    for _ in range(n):
        new = []
        for a, b in zip(points, points[1:] + points[:1]):
            dx, dy = (b[0]-a[0])/3, (b[1]-a[1])/3
            first = (a[0]+dx, a[1]+dy)
            # Outward = right of a counterclockwise edge: rotate by -60 deg.
            tip = (first[0]+(dx+3*dy)/2, first[1]+(-dx+dy)/2)
            second = (a[0]+2*dx, a[1]+2*dy)
            new.extend((a, first, tip, second))
        points = new
    return points


def sign(v):
    return (v > 0) - (v < 0)


def sign_surd(a, b):
    """Exact sign of a+b*sqrt(3), for rational a and b."""
    if a == 0:
        return sign(b)
    if b == 0 or sign(a) == sign(b):
        return sign(a)
    return sign(a) * sign(a*a - 3*b*b)


def inside_closed(x, y, points):
    # x,y are rational physical coordinates. Winding number includes edges.
    winding = 0
    for a, b in zip(points, points[1:] + points[:1]):
        dx, dy = b[0]-a[0], b[1]-a[1]
        cross = sign_surd(dx*y, -dx*a[1]-dy*(x-a[0]))
        ya = sign_surd(y, -a[1])  # sign(y - physical a.y)
        yb = sign_surd(y, -b[1])
        if cross == 0 and min(a[0], b[0]) <= x <= max(a[0], b[0]) and ya*yb <= 0:
            return True
        if ya >= 0 and yb < 0 and cross > 0:
            winding += 1
        elif ya < 0 and yb >= 0 and cross < 0:
            winding -= 1
    return winding != 0


def floor_sqrt3(v):
    """Exact floor of sqrt(3)*v, for rational v."""
    if v == 0:
        return 0
    if v < 0:
        return -floor_sqrt3(-v)-1  # Nonzero rational times sqrt(3) is irrational.
    return isqrt(3*v.numerator*v.numerator) // v.denominator


def count_koch(d, n):
    points = koch_vertices(n)
    if d == 0:
        return int(inside_closed(F(0), F(0), points))
    ilo = ceil(min(p[0] for p in points)/d)
    ihi = floor(max(p[0] for p in points)/d)
    jlo = -floor_sqrt3(-min(p[1] for p in points)/d)
    jhi = floor_sqrt3(max(p[1] for p in points)/d)
    return sum(inside_closed(d*i, d*j, points)
               for i in range(ilo, ihi+1) for j in range(jlo, jhi+1))


def area_koch(n):
    if n < 0:
        raise ValueError('n must be nonnegative')
    return 25*sqrt(3)*(8/5 - (3/5)*(4/9)**n)


def solve(part, d_text='1', n=2):
    d = spacing(d_text)
    if part == 1:
        return count_square(d)
    if part == 2:
        return F(count_disk(d), 4*count_square(d))
    if part == 3:
        return area_koch(2)
    if part == 4:
        return area_koch(n)
    if part == 5:
        return count_koch(d, 2)
    if part == 6:
        return count_koch(d, n)
    raise ValueError('part must be 1,...,6')


if __name__ == '__main__':
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument('part', type=int)
    parser.add_argument('--d', default='1')
    parser.add_argument('--n', type=int, default=2)
    args = parser.parse_args()
    result = solve(args.part, args.d, args.n)
    print(result)
    if isinstance(result, F):
        print(float(result))
```

Examples from the program:

| Quantity | Value |
| --- | --- |
| $A(1,R_0)$ | 121 |
| $A(1,R_1)$ | 81 |
| Part (2), $d=1$ | $81/484\approx0.167355371900826$ |
| $A(1,K_0)$ | 49 |
| $A(1,K_1)$ | 59 |
| $A(1,K_2)$ | 65 |
| $A(1,K_3)$ | 67 |

The lattice counts include the boundaries.
