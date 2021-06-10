import { storeChannelInfo, collector } from 'by-data-pool'
import { addGtmListener } from '../utils/gtm'

if (process.client) {
  if (typeof window !== 'undefined') { window.APP_ID = 10004 }
  if (typeof storeChannelInfo === 'function') { storeChannelInfo(process.env.NODE_ENV) }
  if (collector && typeof collector.start === 'function') { collector.start() }

  addGtmListener()
}
