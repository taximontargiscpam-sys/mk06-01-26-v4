"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

interface PhoneCallModalProps {
  phoneNumber: string
  displayNumber: string
}

export function PhoneCallModal({ phoneNumber, displayNumber }: PhoneCallModalProps) {
  const [open, setOpen] = useState(false)

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`
    setOpen(false)
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-foreground/70 hover:text-primary transition-colors cursor-pointer"
      >
        {displayNumber}
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              Appeler
            </DialogTitle>
            <DialogDescription className="text-lg pt-2">{displayNumber}</DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex-row gap-2 sm:gap-2">
            <Button variant="outline" onClick={() => setOpen(false)} className="flex-1">
              Annuler
            </Button>
            <Button onClick={handleCall} className="flex-1 bg-primary hover:bg-primary/90">
              Appeler
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
