import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export default function HolderMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 border-pink-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            INO Holder Map
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-300 text-lg">
            Visualize INO token distribution and wallet clusters on Bubblemaps
          </p>
          
          <Button
            asChild
            className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-lg py-6"
          >
            <a
              href="https://app.bubblemaps.io/cro/token/0x025f1575908d85815198390b2e5366fe754f8207"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Open on Bubblemaps.io
            </a>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}