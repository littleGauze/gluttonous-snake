export enum ClockType { TIMED, INFINITE }

export enum ClockTick { EVEN, ODD }

export class Timer {
  private handle: number
  private interval: number

  public type: ClockType
  public tick: ClockTick = ClockTick.EVEN
  public isRunning: boolean
  public isPaused: boolean

  constructor(interval: number, duration: number, handler: () => void) {
    this.interval = interval
    this.handler = handler
    this.type = (duration === 0) ? ClockType.INFINITE : ClockType.TIMED
  }

  public handler: () => void = () => { console.log('No clock event') }

  public onElapsed = (): void => {
    if (this.isPaused) return

    this.tick = (this.tick === ClockTick.EVEN) ? ClockTick.ODD : ClockTick.EVEN
    this.handler()

    if (this.type === ClockType.TIMED) {
      this.stop()
    }
  }

  public start(): void {
    this.isRunning = true
    this.handle = (this.type === ClockType.INFINITE)
      ? window.setInterval(this.onElapsed.bind(this), this.interval)
      : window.setTimeout(this.onElapsed.bind(this), this.interval)
  }

  public stop(): void {
    this.isRunning = false
    return this.type === ClockType.INFINITE
      ? window.clearInterval(this.handle)
      : window.clearTimeout(this.handle)
  }

  public pause(): void { this.isPaused = true }

  public resume(): void { this.isPaused = false }
}
