import { Subject } from 'rxjs'
import { AjaxError } from 'rxjs/ajax'

type subjectDataType = { type: string; data?: any; error?: AjaxError }

const subject = new Subject<subjectDataType>()

export const apiResponse = {
  success: (type: string, data?: any) => subject.next({ type, data }),
  error: (type: string, error: any) => subject.next({ type, error }),
  subscribe: (
    actions: { nextActions: string[]; errorActions?: string[] },
    observer: { next?: (data: any, type?: string) => void; error?: (error: any, type?: string) => void } ,
  ) =>
    subject.subscribe({
      next: ({ type, data, error }: subjectDataType) => {
        // Observer subscribes next event
        if (observer.next) {
          if (actions.nextActions.includes(type)) {
            observer.next(data, type)
          }
        }
        // Observer subscribes error event
        if (observer.error) {
          if (actions.errorActions?.includes(type)) {
            observer.error(error, type)
          }
        }
      }
    })
  // subject.error & subject.complete will terminate the data stream, so we shouldn't use it
}

