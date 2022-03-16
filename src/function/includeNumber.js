export default function Range(begin, end) {
    this.low = begin
    this.hi = end
    this.has = function (n) {
        return (n >= this.low && n <= this.hi)
    }
}

